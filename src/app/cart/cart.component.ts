import { ApiUtiService } from '@services/api-uti.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { HelperService } from '@services/helper.service';
import { isEqual } from 'lodash';

interface CartDetail {
  name: string;
  data: {
    currency: string;
    unit_amount: number;
    product_data: {
      name: string;
      images: string[];
    };
  };
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  cartDetails: CartDetail[] = [];
  cart = {};
  private sub: any;
  constructor(
    public cartService: CartService,
    public helper: HelperService,
    private api: ApiUtiService
  ) {}

  ngOnInit(): void {
    this.sub = this.cartService.currentCart.subscribe((cart) => {
      console.log('cart change', cart);
      this.cart = cart;
      if (this.isItemChanged(cart, this.cartDetails)) {
        this.fetchItems(cart).then((result) => {
          this.cartDetails = result;
          console.log('API fetch:', result);
        });
      } else {
        // only change quanity
        this.cartDetails.forEach((x) => {
          x.quantity = cart[x.name];
          console.log('only change quantity');
        });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  totalPrice() {
    return this.cartDetails
      .map((x) => x.quantity * x.data.unit_amount)
      .reduce((sum, curr) => sum + curr, 0);
  }
  fetchItems(cart) {
    let promiseArray = [];
    let results = [];
    for (const id of Object.keys(cart)) {
      promiseArray.push(
        new Promise((resolve, reject) => {
          this.api.getGood(id).subscribe(
            (res) => {
              return resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        })
      );
    }
    return Promise.all(promiseArray)
      .then((res) => {
        res.forEach((item) => {
          results.push({ ...item, quantity: cart[item.name] });
        });
        return results;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
  isItemChanged(newV, cartDetails) {
    // newV:{sampletest0:1}
    // cardDetails:[{name:samepletest0,data:{},quanity:1}]
    let oldV = {};
    cartDetails.forEach((x) => {
      oldV[x.name] = x.quantity;
    });
    return !isEqual(Object.keys(oldV), Object.keys(newV));
  }
  async handleClick() {
    this.api.checkout(this.cartDetails);
  }
}

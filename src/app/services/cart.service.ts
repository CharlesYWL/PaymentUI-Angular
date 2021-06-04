import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiUtiService } from './api-uti.service';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject({});
  currentCart = this.cart.asObservable();

  logCart() {
    console.log('CART:', this.cart);
  }
  addToCart = (item: string) => {
    let newCart = cloneDeep(this.cart.value);
    if (!(item in newCart)) {
      newCart[item] = 0;
    }
    newCart[item] += 1;
    this.cart.next(newCart);
  };
  removeFromCart = (item: string) => {
    let newCart = cloneDeep(this.cart.value);
    if (item in newCart) {
      newCart[item] -= 1;
    }
    if (newCart[item] === 0) {
      delete newCart[item];
    }
    this.cart.next(newCart);
  };
  cartNumber = () => {
    if (
      typeof this.cart.value === 'object' &&
      this.cart.value !== null &&
      Object.keys(this.cart.value).length !== 0
    ) {
      return Object.keys(this.cart.value).reduce(
        (sum, key) => sum + this.cart.value[key] || 0,
        0
      );
    }
    return '';
  };
}

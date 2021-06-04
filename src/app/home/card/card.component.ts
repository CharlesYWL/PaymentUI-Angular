import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from '@services/helper.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '@services/cart.service';

export interface GoodDetail {
  name: string;
  data: {
    currency: string;
    unit_amount: string;
    product_data: {
      name: string;
      images: string[];
      category: string;
    };
  };
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  providers: [HelperService],
})
export class CardComponent implements OnInit {
  @Input() item: GoodDetail = undefined;

  constructor(
    public helper: HelperService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
  ) {}

  ngOnInit(): void {}

  navigateTo(itemId) {
    this.router.navigate(['./items/' + itemId], {
      relativeTo: this.activatedRoute,
    });
  }
}

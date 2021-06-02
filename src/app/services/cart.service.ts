import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = {};
  constructor() {
    this.fakeCart();
  }
  fakeCart() {
    this.cart = { a: 1, b: 1, c: 2 };
  }
  logCart() {
    console.log(this.cart);
  }
}

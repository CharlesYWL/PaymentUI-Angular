import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class ApiUtiService {
  apiRoot: string = '';
  constructor(private http: HttpClient) {
    console.log(environment.apiRoot);
    this.apiRoot = environment.apiRoot || '';
  }

  getGoods() {
    return this.http.get(this.apiRoot + 'stripe/get-goods');
  }
  getGood(id: string) {
    return this.http.get(this.apiRoot + 'stripe/get-goods/' + id);
  }
  stripePromise = loadStripe(
    'pk_test_51IZipEIbg2Wdh6h2Czeqs7j35oIHGaPgFiWzjdR6mqdnX0Qwbx3PTPJEDYFXw6p8aM7lgRCSpnNRlhuKhzP6bepL00X7tqXf2a'
  );
  async singleCheckout(itemId) {
    let stripe = await this.stripePromise;
    return this.http
      .post(this.apiRoot + 'stripe/create-checkout-session-single', {
        id: itemId,
        quantity: 1,
        target: 'angular',
      })
      .subscribe(
        (session: any) => {
          return stripe.redirectToCheckout({
            sessionId: session.id,
          });
        },
        (error) => {
          console.log('stripe checkout error:', error);
        }
      );
  }
}

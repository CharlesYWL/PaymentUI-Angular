import { Component } from '@angular/core';
import { CartService } from '@services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [],
})
export class AppComponent {
  constructor(public cartService: CartService) {}
  ngOnInit() {}
}

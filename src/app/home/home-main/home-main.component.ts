import { Component, OnInit } from '@angular/core';
import { ApiUtiService } from '@services/api-uti.service';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.sass'],
  providers: [ApiUtiService, CartService],
})
export class HomeMainComponent implements OnInit {
  itemList = [];

  constructor(private api: ApiUtiService) {}

  ngOnInit(): void {
    this.api.getGoods().subscribe((data: any) => {
      this.itemList = data.itemList;
    });
  }
}

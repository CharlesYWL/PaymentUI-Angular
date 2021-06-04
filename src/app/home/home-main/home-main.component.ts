import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiUtiService } from '@services/api-uti.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.sass'],
  providers: [ApiUtiService],
})
export class HomeMainComponent implements OnInit {
  @Output() addToCart = new EventEmitter<string>();
  itemList = [];

  constructor(private api: ApiUtiService) {}

  ngOnInit(): void {
    this.api.getGoods().subscribe((data: any) => {
      this.itemList = data.itemList;
    });
  }
  onAddToCart(item: string) {
    this.addToCart.emit(item);
  }
}

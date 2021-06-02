import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodDetail } from '../card/card.component';
import { HelperService } from '@services/helper.service';
import { ApiUtiService } from '@services/api-uti.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.sass'],
  providers: [HelperService],
})
export class ItemPageComponent implements OnInit {
  id: string = '';
  item: GoodDetail = undefined;
  isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    public helper: HelperService,
    private apiUtiService: ApiUtiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.apiUtiService.getGood(params['id']).subscribe(
        (rs: GoodDetail) => {
          this.item = rs;
          this.isLoading = false;
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  async handleClick() {
    this.apiUtiService.singleCheckout(this.id);
  }
}

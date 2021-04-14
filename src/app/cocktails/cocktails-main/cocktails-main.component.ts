import { CocktailService } from '../../services/cocktail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails-main',
  templateUrl: './cocktails-main.component.html',
  styleUrls: ['./cocktails-main.component.sass'],
})
export class CocktailsMainComponent implements OnInit {
  query = '';
  drinks = [];

  constructor(private cocktail: CocktailService) {}

  ngOnInit(): void {}

  search(query: string) {
    this.query = query;
    this.cocktail.search(query).subscribe((response: any) => {
      this.drinks = response.drinks;
    });
  }
}

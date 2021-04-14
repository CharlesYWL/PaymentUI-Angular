import { Component, Input, OnInit } from '@angular/core';

interface drinkProp {
  strDrink: string;
  strInstructions: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass'],
})
export class ResultsComponent implements OnInit {
  @Input() drinks: drinkProp[] = [];
  @Input() query = '';

  constructor() {}

  ngOnInit(): void {}

  boldStr(str: string) {
    if (this.query.length < 3) {
      return str;
    }
    const reg = new RegExp('(' + this.query + ')', 'gi');
    return str.replace(reg, '<span class="font-weight-bold">$1</span>');
  }
}

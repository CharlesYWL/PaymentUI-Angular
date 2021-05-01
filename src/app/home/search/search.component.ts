import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  searchField: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.searchField);
  }
}

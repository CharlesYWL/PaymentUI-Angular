import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.sass'],
})
export class HomeMainComponent implements OnInit {
  title = 'Client Contacts Manager';

  constructor() {}

  ngOnInit(): void {}
}

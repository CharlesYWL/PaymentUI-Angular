import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.sass'],
})
export class HomeMainComponent implements OnInit {
  paths = [
    { path: 'rp', name: 'reverse-phrase' },
    { path: 'dt', name: 'directive-test' },
    { path: 'pipe', name: 'pipetest' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

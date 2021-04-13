import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
})
export class AlertComponent implements OnInit {
  @Input() variant: 'success' | 'warning' | 'info' | 'danger' = 'success';

  constructor() {}

  ngOnInit(): void {}
}

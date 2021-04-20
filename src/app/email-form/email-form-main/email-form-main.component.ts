import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form-main',
  templateUrl: './email-form-main.component.html',
  styleUrls: ['./email-form-main.component.sass'],
})
export class EmailFormMainComponent implements OnInit {
  title = 'email-form';
  email = '';

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    console.log(this.email);
  }
}

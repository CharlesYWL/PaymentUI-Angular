import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() type: string;
  @Input() pattern: string = '';

  constructor() {}

  ngOnInit(): void {}

  showMsg() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}

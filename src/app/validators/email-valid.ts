import {
  Validator,
  FormGroup,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { Injectable } from '@angular/core';

const regex = new RegExp(
  '^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$'
);

@Injectable({
  providedIn: 'root',
})
export class EmailValid implements Validator {
  validate(control: FormControl): ValidationErrors | null {
    if (regex.test(control.value)) {
      return null;
    } else {
      return { email: false };
    }
  }
}

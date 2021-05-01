import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { EmailValid } from '../../../validators/email-valid';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass'],
})
export class ClientFormComponent implements OnInit {
  // new FormGroup is defined here
  clientForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, this.emailVaild.validate]),
    telephoneNumber: new FormControl(''),
    companyName: new FormControl('', Validators.required),
  });

  // in the template.
  constructor(private emailVaild: EmailValid) {}

  ngOnInit() {}

  // event called when form is submitted, displaying the output of the form
  saveClient() {
    console.log(this.clientForm);
  }
}

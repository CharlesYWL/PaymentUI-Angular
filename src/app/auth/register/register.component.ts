import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { CompromisedPassword } from './../../validators/compromised-password';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Match } from '../../validators/match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
        [this.compromisedPassword.validate]
      ),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.match.validate] }
  );

  constructor(
    private match: Match,
    private compromisedPassword: CompromisedPassword,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async register() {
    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value;

    try {
      let result = await this.authService.signUp(email, password);
      this.router.navigateByUrl('auth/dashboard');
    } catch (e) {
      this.registerForm.setErrors({ registrationFailed: true });
    }
  }
}

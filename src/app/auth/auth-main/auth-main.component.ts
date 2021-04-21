import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.sass'],
})
export class AuthMainComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}

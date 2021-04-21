import { AuthService } from './../services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const authOnly = () => redirectUnauthorizedTo(['/auth/login']);
const guestOnly = () => redirectLoggedInTo(['/auth/dashboard']);

const routes: Routes = [
  {
    path: '',
    component: AuthMainComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: guestOnly },
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: guestOnly },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: authOnly },
      },
      { path: 'logout', component: LogoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  constructor(public authService: AuthService) {}
}

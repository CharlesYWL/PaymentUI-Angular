import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipetestComponent } from './pipetest/pipetest.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { ReversePhraseComponent } from './reverse-phrase/reverse-phrase.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
// const routes: Routes = [];
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'cocktails',
    loadChildren: () =>
      import('./cocktails/cocktails.module').then((m) => m.CocktailsModule),
  },
  {
    path: 'email-form',
    loadChildren: () =>
      import('./email-form/email-form.module').then((m) => m.EmailFormModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'pipe', component: PipetestComponent },
  { path: 'dt', component: DirectiveTestComponent },
  { path: 'rp', component: ReversePhraseComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

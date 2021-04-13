import { HomeMainComponent } from './home/home-main/home-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PipetestComponent } from './pipetest/pipetest.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { ReversePhraseComponent } from './reverse-phrase/reverse-phrase.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pipe', component: PipetestComponent },
  { path: 'dt', component: DirectiveTestComponent },
  { path: 'rp', component: ReversePhraseComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

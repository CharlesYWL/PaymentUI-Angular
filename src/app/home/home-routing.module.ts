import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
    children: [
      { path: 'clients', component: ClientPageComponent },
      { path: 'clients/:id', component: ClientPageComponent },
      { path: '', redirectTo: 'clients', pathMatch: 'full' },
      { path: 'company', component: CompanyPageComponent },
      { path: 'about', component: AboutPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

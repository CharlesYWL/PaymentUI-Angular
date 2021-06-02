import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { ItemPageComponent } from './item-page/item-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
  },
  { path: 'items/:id', component: ItemPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

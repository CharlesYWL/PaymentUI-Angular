import { CocktailService } from './../services/cocktail.service';
import { CocktailsMainComponent } from './cocktails-main/cocktails-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CocktailsMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailsRoutingModule {}

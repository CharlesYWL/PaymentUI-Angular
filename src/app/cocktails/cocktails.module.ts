import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsMainComponent } from './cocktails-main/cocktails-main.component';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    CocktailsMainComponent,
    FormComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule
  ]
})
export class CocktailsModule { }

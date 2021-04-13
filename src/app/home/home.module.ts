import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [CommonModule, HomeRoutingModule, BaseModule],
})
export class HomeModule {}

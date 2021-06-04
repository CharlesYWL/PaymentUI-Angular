import { AboutModule } from './../about/about.module';
import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { ComponentsModule } from '../components/components.module';
import { CardComponent } from './card/card.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [HomeMainComponent, CardComponent, ItemPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    BaseModule,
    AboutModule,
    SharedModule,
  ],
})
export class HomeModule {}

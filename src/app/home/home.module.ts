import { AboutModule } from './../about/about.module';
import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { ComponentsModule } from '../components/components.module';
import { CustomMaterialModule } from './custom-meterial.module';
import { CardComponent } from './card/card.component';
import { ItemPageComponent } from './item-page/item-page.component';

@NgModule({
  declarations: [HomeMainComponent, CardComponent, ItemPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    BaseModule,
    CustomMaterialModule,
    AboutModule,
  ],
})
export class HomeModule {}

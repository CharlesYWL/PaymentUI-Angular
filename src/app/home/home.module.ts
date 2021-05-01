import { AboutModule } from './../about/about.module';
import { BaseModule } from './../base/base.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { ComponentsModule } from '../components/components.module';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-meterial.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutPageComponent } from './about/about-page/about-page.component';

@NgModule({
  declarations: [HomeMainComponent, NavigationComponent, AboutPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    BaseModule,
    CompanyModule,
    ClientModule,
    SharedModule,
    CustomMaterialModule,
    AboutModule,
  ],
})
export class HomeModule {}

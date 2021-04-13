import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ModalComponent } from './modal/modal.component';
import { ContactMainComponent } from './contact-main/contact-main.component';


@NgModule({
  declarations: [
    ModalComponent,
    ContactMainComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

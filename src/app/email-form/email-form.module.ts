import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmailFormRoutingModule } from './email-form-routing.module';
import { EmailFormMainComponent } from './email-form-main/email-form-main.component';

@NgModule({
  declarations: [EmailFormMainComponent],
  imports: [CommonModule, EmailFormRoutingModule, FormsModule],
})
export class EmailFormModule {}

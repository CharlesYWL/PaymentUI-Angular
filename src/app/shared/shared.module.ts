import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from './custom-meterial.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomMaterialModule],
  exports: [CustomMaterialModule],
})
export class SharedModule {}

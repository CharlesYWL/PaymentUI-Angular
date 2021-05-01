import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../custom-meterial.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, CustomMaterialModule],
  exports: [SearchComponent],
})
export class SharedModule {}

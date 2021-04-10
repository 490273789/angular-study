import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-module-routing.model';

import { FormModuleComponent } from './pages/form-module.component';

@NgModule({
  imports: [FormRoutingModule, FormsModule, CommonModule],
  exports: [],
  declarations: [FormModuleComponent],
  providers: [],
})
export class FormModule {}

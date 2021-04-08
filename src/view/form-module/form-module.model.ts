import { NgModule } from '@angular/core';
import { FormRoutingModule } from './form-module-routing.model';

import { FormModuleComponent } from './pages/form-module.component';

@NgModule({
  imports: [FormRoutingModule],
  exports: [],
  declarations: [FormModuleComponent],
  providers: [],
})
export class FormModule {}

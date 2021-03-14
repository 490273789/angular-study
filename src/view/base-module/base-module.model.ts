import { NgModule } from '@angular/core';
import { BaseRoutingModule } from './base-module-routing.model';

import { BaseComponent } from './pages/base-module.component';
@NgModule({
  imports: [BaseRoutingModule],
  exports: [],
  declarations: [BaseComponent],
  providers: [],
})
export class BaseModule {}

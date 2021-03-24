import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BaseRoutingModule } from './base-module-routing.model';

import { BaseComponent } from './pages/base-module.component';
@NgModule({
  imports: [BaseRoutingModule, CommonModule],
  exports: [],
  declarations: [BaseComponent],
  providers: [],
})
export class BaseModule {}

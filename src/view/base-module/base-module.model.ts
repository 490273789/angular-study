import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-module-routing.model';

import { BaseComponent } from './pages/base-module.component';
import { EventBaseComponent } from './pages/component/event-base/event-base.component';
import { DialogComponent } from './pages/component/dialog/dialog.component';
@NgModule({
  imports: [BaseRoutingModule, CommonModule],
  exports: [],
  declarations: [BaseComponent, EventBaseComponent, DialogComponent],
  providers: [],
})
export class BaseModule {}

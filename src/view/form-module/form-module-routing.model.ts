import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormModuleComponent } from './pages/form-module.component';

const routes: Routes = [
  { path: 'form-module', component: FormModuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}

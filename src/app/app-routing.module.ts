import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'base',
    loadChildren: () =>
      import('../view/base-module/base-module.model').then((m) => m.BaseModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('../view/form-module/form-module.model').then((m) => m.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

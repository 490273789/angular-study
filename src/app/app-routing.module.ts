import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/layout/layout.component';
import { NoComponent } from 'src/view/404/404.component';
import { HomePageComponent } from 'src/view/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent,
      },
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
      {
        path: '',
        redirectTo: '/home-page',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    component: NoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

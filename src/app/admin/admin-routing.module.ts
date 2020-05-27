import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { CurrentPoliciesComponent } from './views/current-policies/current-policies.component';


export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'current-policies',
        component: CurrentPoliciesComponent
      },
      {
        path: 'dashboard',
        redirectTo: ''
      },
    ]
  },
  // { path: '**', component: P404Component }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

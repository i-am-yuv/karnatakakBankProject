import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { LayoutComponent } from '../shared/layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  // {
  //   path: 'branchManager',
  //   component: BranchManagerComponent
  // }
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'branchManager', component: BranchManagerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

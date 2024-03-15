import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { CeoPortalComponent } from './ceo-portal/ceo-portal.component';

const routes: Routes = [
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
  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'ceoPortal', component: CeoPortalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

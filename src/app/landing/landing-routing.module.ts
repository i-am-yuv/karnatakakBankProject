import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { CeoPortalComponent } from './ceo-portal/ceo-portal.component';
import { BusinessHeadComponent } from './business-head/business-head.component';
import { DigitalTeamComponent } from './digital-team/digital-team.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'branchManager', component: BranchManagerComponent },
      { path: 'ceoPortal', component: CeoPortalComponent },
      { path: 'business-head', component: BusinessHeadComponent },
      { path: 'digital-team', component: DigitalTeamComponent }
    ]
  },
  // {
  //   path: '', component: LayoutComponent,
  //   children: [
  //     { path: 'branchManager', component: BranchManagerComponent }
  //   ]
  // },
  // {
  //   path: '', component: LayoutComponent,
  //   children: [
  //     { path: 'ceoPortal', component: CeoPortalComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

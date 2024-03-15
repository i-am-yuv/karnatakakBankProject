import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { SharedModule } from '../shared/shared.module';
import { CeoPortalComponent } from './ceo-portal/ceo-portal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BranchManagerComponent,
    CeoPortalComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }

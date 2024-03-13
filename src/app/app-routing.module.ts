import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
    //  canActivate: [AuthGuard]
  },
  {
    path: 'master',
    loadChildren: () =>
      import('./master/master.module').then((m) => m.MasterModule),
    //  canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
    //  canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

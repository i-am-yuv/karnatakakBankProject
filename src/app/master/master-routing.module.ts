import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'todo-list', component: TodoListComponent }
    ]
  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'report', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

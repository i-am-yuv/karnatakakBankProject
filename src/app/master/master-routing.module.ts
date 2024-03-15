import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReportComponent } from './report/report.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'todo-list', component: TodoListComponent },
      { path: 'report', component: ReportComponent },
      { path: 'todo-lists', component: TodoListsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

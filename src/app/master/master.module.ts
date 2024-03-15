import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { ReportComponent } from './report/report.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';


@NgModule({
  declarations: [
    TodoListComponent,
    ReportComponent,
    TodoListsComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReportComponent } from './report/report.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';


@NgModule({
  declarations: [
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

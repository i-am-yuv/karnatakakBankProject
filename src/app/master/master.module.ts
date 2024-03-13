import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }

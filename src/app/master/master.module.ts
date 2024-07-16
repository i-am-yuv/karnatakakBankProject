import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReportComponent } from './report/report.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { NotificationComponent } from './notification/notification.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { EmployeeAttendenceComponent } from './employee-attendence/employee-attendence.component';


@NgModule({
  declarations: [
    ReportComponent,
    TodoListsComponent,
    NotificationComponent,
    CalendarComponent,
    QuickLinksComponent,
    EmployeeAttendenceComponent,

  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule, FullCalendarModule
  ]
})
export class MasterModule { }

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
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    ReportComponent,
    TodoListsComponent,
    NotificationComponent,
    CalendarComponent,
    QuickLinksComponent,
    EmployeeAttendenceComponent,
    AdminDashboardComponent,

  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    CalendarModule,FormsModule,ReactiveFormsModule,
    SharedModule, FullCalendarModule
  ]
})
export class MasterModule { }

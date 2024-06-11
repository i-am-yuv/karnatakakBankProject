import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { ReportComponent } from './report/report.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { NotificationComponent } from './notification/notification.component';
import { CalendarComponent } from './calendar/calendar.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'report', component: ReportComponent },
      { path: 'todo-lists', component: TodoListsComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'calender', component: CalendarComponent },
      { path: 'quick-links', component: QuickLinksComponent }
      
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

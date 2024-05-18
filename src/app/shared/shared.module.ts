import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { BlockUIModule } from 'primeng/blockui';
import { MultiSelectModule } from 'primeng/multiselect';
import { LayoutComponent } from './layout/layout.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessageService, ConfirmationService } from 'primeng/api';
import { JwtInterceptor } from '../auth/jwt-interceptor';
import { InputSwitchModule } from 'primeng/inputswitch';
// import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    ToastModule

  ], providers: [
    HttpClientModule,
    MessageService,
    DatePipe,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  exports: [
    LayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    DropdownModule,
    MessageModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    TableModule,
    DialogModule,
    SidebarModule,
    BlockUIModule,
    MultiSelectModule,
    HttpClientModule,
    ProgressBarModule,
    InputSwitchModule

  ],

})
export class SharedModule { }

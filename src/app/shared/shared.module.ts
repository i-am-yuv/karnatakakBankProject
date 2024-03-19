import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [
    LayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
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
    ProgressBarModule
  ],

})
export class SharedModule { }

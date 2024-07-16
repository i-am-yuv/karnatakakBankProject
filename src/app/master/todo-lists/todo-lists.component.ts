import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { LayoutService } from 'src/app/shared/layout/layout.service';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {

  constructor(private masterService : MasterService,private layoutService:LayoutService) { }

  ngOnInit(): void {
    
    this.layoutService.getData('to-do-list');
  }

}

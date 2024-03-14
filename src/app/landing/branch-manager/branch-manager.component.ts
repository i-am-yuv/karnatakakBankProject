import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrls: ['./branch-manager.component.scss']
})
export class BranchManagerComponent implements OnInit {

  
  name : any;
  role: any;

  constructor() { }

  ngOnInit(): void {
    this.getLoginInfo();
  }

  getLoginInfo(){
     this.name = sessionStorage.getItem('loginBy');
     this.role = sessionStorage.getItem('loginRole');

  }

}

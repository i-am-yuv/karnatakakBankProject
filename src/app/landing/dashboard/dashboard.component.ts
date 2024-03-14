import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

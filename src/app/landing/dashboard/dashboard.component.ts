import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('* => void', [
        animate('0.5s', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  items = [
    { text: 'Celebrating 100 Years', visible: true },
    { text: 'Celebrating 100 Years', visible: true },
    { text: 'Celebrating 100 Years', visible: true },
    { text: 'Celebrating 100 Years', visible: true },
    { text: 'Celebrating 100 Years', visible: true }
    // Add more items as needed
  ];

  name: any;
  role: any;

  constructor() { }

  ngOnInit(): void {
    this.getLoginInfo();
  }

  getLoginInfo() {
    this.name = sessionStorage.getItem('loginBy');
    this.role = sessionStorage.getItem('loginRole');

  }

}

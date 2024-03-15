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

  holidaysData = [
    {
      date: '23',
      month:'March',
      day: 'Saturday',
      occasion: 'Fourth Saturday Bank Holiday'
    },
    {
      date: '29',
      month:'March',
      day: 'Friday',
      occasion: 'Good Friday'
    },
    {
      date: '10',
      month:'April',
      day: 'Wednesday',
      occasion: 'Eid-Ul-Fitr'
    },
    {
      date: '13',
      month:'April',
      day: 'Saturday',
      occasion: 'Second Saturday Bank Holiday'
    },
    {
      date: '17',
      month:'April',
      day: 'Wednesday',
      occasion: 'Ram Navami'
    },
    {
      date: '21',
      month:'April',
      day: 'Sunday',
      occasion: 'Mahavir Jayanti'
    },
    {
      date: '27',
      month:'April',
      day: 'Saturday',
      occasion: 'Fourth Saturday Bank Holiday'
    }
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

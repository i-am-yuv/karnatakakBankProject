import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

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
    ]),

    trigger('fadeInOut', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.5s')
      ]),
      transition('hidden => visible', [
        animate('0.5s')
      ])
    ])
  ],
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
      month: 'March',
      day: 'Saturday',
      occasion: 'Fourth Saturday Bank Holiday'
    },
    {
      date: '29',
      month: 'March',
      day: 'Friday',
      occasion: 'Good Friday'
    },
    {
      date: '10',
      month: 'April',
      day: 'Wednesday',
      occasion: 'Eid-Ul-Fitr'
    },
    {
      date: '13',
      month: 'April',
      day: 'Saturday',
      occasion: 'Second Saturday Bank Holiday'
    },
    {
      date: '17',
      month: 'April',
      day: 'Wednesday',
      occasion: 'Ram Navami'
    },
    {
      date: '21',
      month: 'April',
      day: 'Sunday',
      occasion: 'Mahavir Jayanti'
    },
    {
      date: '27',
      month: 'April',
      day: 'Saturday',
      occasion: 'Fourth Saturday Bank Holiday'
    }
  ];

  upcomingEvents = [
    {
      title: "Financial Results Announcement",
      desc: "Q1 Financial Results",
      firstLetter: "F"
    },
    {
      title: "Investor Conference Call",
      desc: "Discuss performance and strategies",
      firstLetter: "I"
    },
    {
      title: "Product Launch",
      desc: "Launch of new financial service",
      firstLetter: "P"
    },
    {
      title: "Annual General Meeting (AGM)",
      desc: "Shareholders' gathering",
      firstLetter: "A"
    },
    {
      title: "Charity Event",
      desc: "Community outreach program",
      firstLetter: "C"
    },
    {
      title: "Training or Seminar",
      desc: "Employee and customer education",
      firstLetter: "T"
    },
    {
      title: "Regulatory Compliance Deadline",
      desc: "Compliance with new regulations",
      firstLetter: "R"
    },
    {
      title: "Market Update Webinar",
      desc: "Client market insights",
      firstLetter: "M"
    }
  ];


  name: any;
  role: any;

  constructor() {

  }

  ngOnInit(): void {
    this.getLoginInfo();
    this.imagesDisplayIntervalTime();
  }

  getLoginInfo() {
    this.name = sessionStorage.getItem('loginBy');
    this.role = sessionStorage.getItem('loginRole');
  }

  expandCard() {
    // Add any additional functionality if needed when hovering
  }

  shrinkCard() {
    // Add any additional functionality if needed when unhovering
  }


  private currentIndex = 0;
  rewardImages = [
    { src: '/assets/9486855 1.png', alt: 'Image 1' },
    { src: '/assets/best achiever award.png', alt: 'Image 2' },
    { src: '/assets/employee of the month.png', alt: 'Image 3' },
    { src: '/assets/long service award.png', alt: 'Image 4' },
    { src: '/assets/business impact award.png', alt: 'Image 5' }
  ];

  townhallImages = [
    { src: '/assets/townhall meeting.png', alt: 'Image 1' },
    { src: '/assets/diversity and inclusion  workshop.png', alt: 'Image 2' },
    { src: '/assets/wellness week activites.png', alt: 'Image 3' },
    { src: '/assets/employee appriciation dar.png', alt: 'Image 4' },
  ]

  isVisible(index: number): boolean {
    return this.currentIndex === index;
  }

  imagesDisplayIntervalTime() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.rewardImages.length;
    }, 5000);

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.townhallImages.length;
    }, 5000);
  }

}

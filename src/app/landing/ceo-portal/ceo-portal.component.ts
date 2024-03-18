import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MasterService } from 'src/app/master/master.service';

@Component({
  selector: 'app-ceo-portal',
  templateUrl: './ceo-portal.component.html',
  styleUrls: ['./ceo-portal.component.scss'],
  animations: [
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
  ]
})
export class CeoPortalComponent implements OnInit {

  regions: any;


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

  constructor(private masterService : MasterService) { }

  ngOnInit(): void {
    this.imagesDisplayIntervalTime();
    this.regions = [
      { name: 'East', code: 'E' },
      { name: 'West', code: 'W' },
      { name: 'North', code: 'N' },
      { name: 'South', code: 'S' }
    ];
    this.findRegionalPerformance('South');
    this.getTodoList();
  }

  private currentIndex = 0;
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
      this.currentIndex = (this.currentIndex + 1) % this.townhallImages.length;
    }, 5000);
  }

  currPerformance: any;
  currRegion = 'South';
  findRegionalPerformance(region: string) {
    if (region == 'North') {
      this.currPerformance = "78 %";
      this.currRegion = 'North';
    }
    else if (region == 'South') {
      this.currPerformance = "65 %";
      this.currRegion = 'South';

    }
    else if (region == 'East') {
      this.currPerformance = "35 %";
      this.currRegion = 'East';

    }
    else if (region == 'West') {
      this.currPerformance = "98 %";
      this.currRegion = 'West';

    }
    else {
      this.currPerformance = "Data not found!!";
      this.currRegion = 'N/A';
    }
  }

  todoList : any;
  getTodoList()
  {
    this.masterService.todoListItems().then(
      (res)=>{
        this.todoList = res;
      }
    ).catch(
      (err)=>{

      }
    )
  }
}

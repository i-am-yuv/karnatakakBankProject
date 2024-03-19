import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MasterService } from 'src/app/master/master.service';
import { interval } from 'rxjs';

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
  stocks : any;

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

  constructor(private masterService : MasterService) { 
    this.stocks = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"];
  }

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

    const intervalObservable = interval(5000); // 5000 milliseconds = 5 seconds
    intervalObservable.subscribe(() => {
      this.getBankShare();
    });
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
    this.masterService.getBranchPerformace(region).then(
      (res)=>{
         this.currPerformance = res.additionalProp2;
      }
    ).catch(
      (err)=>{
      }
    )
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

  bankShare : any;
  getBankShare()
  {

    var index = this.getRandomIndex() ;
    this.masterService.getKarnatakBankShare(this.stocks[index]).then(
      (res)=>{
        this.bankShare = res;
      }
    ).catch(
      (err)=>{

      }
    )
  }

  getRandomIndex(): number {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * this.stocks.length);
    return randomIndex;
  }

}

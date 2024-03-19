import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MasterService } from 'src/app/master/master.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrls: ['./branch-manager.component.scss'],
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
export class BranchManagerComponent implements OnInit {

  name: any;
  role: any;
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
    this.getLoginInfo();
    this.townhallImagesDisplayIntervalTime();
    this.getRegionalNews();
    this.findRegionalPerformance('South');
    

    const intervalObservable = interval(5000); // 5000 milliseconds = 5 seconds
    intervalObservable.subscribe(() => {
      this.getBankShare();
    });
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

  private currentTownhallImageIndex = 0;
  townhallImages = [
    { src: '/assets/townhall meeting.png', alt: 'Image 1' },
    { src: '/assets/diversity and inclusion  workshop.png', alt: 'Image 2' },
    { src: '/assets/wellness week activites.png', alt: 'Image 3' },
    { src: '/assets/employee appriciation dar.png', alt: 'Image 4' },
  ]

  isTownhallImageVisible(index: number): boolean {
    return this.currentTownhallImageIndex === index;
  }

  townhallImagesDisplayIntervalTime() {
    setInterval(() => {
      this.currentTownhallImageIndex = (this.currentTownhallImageIndex + 1) % this.townhallImages.length;
    }, 5000);
  }


  allNews : any;
  getRegionalNews()
  {
    this.masterService.getRegionalNews().then(
      (res)=>{
        this.allNews = res;
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


  currPerformance: any;
  currRegion = 'South';
  findRegionalPerformance(region: string) {
    this.currRegion = region ;
    this.masterService.getBranchPerformace(region).then(
      (res)=>{
         this.currPerformance = res.additionalProp2;
      }
    ).catch(
      (err)=>{
      }
    )
  }
}

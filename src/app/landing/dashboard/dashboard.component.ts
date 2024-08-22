import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MasterService } from 'src/app/master/master.service';
import { PrimeNGConfig } from 'primeng/api';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { environment } from 'src/environments/environment';
import { Holiday } from './holiday';

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

  holidaysData:Holiday[]=[];
  // holidaysData = [
  //   {
  //     date: '23',
  //     month: 'March',
  //     day: 'Saturday',
  //     occasion: 'Fourth Saturday Bank Holiday'
  //   },
  //   {
  //     date: '29',
  //     month: 'March',
  //     day: 'Friday',
  //     occasion: 'Good Friday'
  //   },
  //   {
  //     date: '10',
  //     month: 'April',
  //     day: 'Wednesday',
  //     occasion: 'Eid-Ul-Fitr'
  //   },
  //   {
  //     date: '13',
  //     month: 'April',
  //     day: 'Saturday',
  //     occasion: 'Second Saturday Bank Holiday'
  //   },
  //   {
  //     date: '17',
  //     month: 'April',
  //     day: 'Wednesday',
  //     occasion: 'Ram Navami'
  //   },
  //   {
  //     date: '21',
  //     month: 'April',
  //     day: 'Sunday',
  //     occasion: 'Mahavir Jayanti'
  //   },
  //   {
  //     date: '27',
  //     month: 'April',
  //     day: 'Saturday',
  //     occasion: 'Fourth Saturday Bank Holiday'
  //   }
  // ];

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

  subscription!:Subscription;
  name: any;
  role: any;

  isMobile!: boolean;

  constructor(private layoutService:LayoutService,private masterService: MasterService, private primengConfig: PrimeNGConfig,private sharedServiceService:SharedServiceService) {

  }
  triggerComponentBMethod() {
    this.sharedServiceService.callMethod();
  }
  ngOnInit(): void {
    
    this.triggerComponentBMethod();
    this.getLoginInfo();
    this.getTodoList();
    this.rewardImagesDisplayIntervalTime();
    this.townhallImagesDisplayIntervalTime();
    this.getRegionalNews();
    this.layoutService.getHolidays().then((res:any)=>{
      this.holidaysData=res;
    }).catch((e:any)=>{

    });
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
    this.layoutService.getData('dashboard');
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Change the breakpoint according to your design
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


  private currentRewardImageIndex = 0;
  rewardImages = [
    { src: '/assets/9486855 1.png', alt: 'Image 1' },
    { src: '/assets/best achiever award.png', alt: 'Image 2' },
    { src: '/assets/employee of the month.png', alt: 'Image 3' },
    { src: '/assets/long service award.png', alt: 'Image 4' },
    { src: '/assets/business impact award.png', alt: 'Image 5' }
  ];

  isRewardImageVisible(index: number): boolean {
    return this.currentRewardImageIndex === index;
  }

  rewardImagesDisplayIntervalTime() {
    setInterval(() => {
      this.currentRewardImageIndex = (this.currentRewardImageIndex + 1) % this.rewardImages.length;
    }, 5000);
  }

  private currentTownhallIndex = 0;
  townhallImages = [
    { src: '/assets/townhall meeting.png', alt: 'Image 1' },
    { src: '/assets/diversity and inclusion  workshop.png', alt: 'Image 2' },
    { src: '/assets/wellness week activites.png', alt: 'Image 3' },
    { src: '/assets/employee appriciation dar.png', alt: 'Image 4' },
  ]

  isTownhallImageVisible(index: number): boolean {
    return this.currentTownhallIndex === index;
  }

  townhallImagesDisplayIntervalTime() {
    setInterval(() => {
      this.currentTownhallIndex = (this.currentTownhallIndex + 1) % this.townhallImages.length;
    }, 5000);
  }

  todoList: any;
  getTodoList() {
    this.masterService.todoListItems().then(
      (res) => {
        this.todoList = res;
      }
    ).catch(
      (err) => {

      }
    )
  }

  showAlert(): void {
    this.sharedServiceService.displayInfoMessage("Coming Soon..");
  }
  allNews: any;
  getRegionalNews() {
    this.masterService.getRegionalNews().then(
      (res) => {
        this.allNews = res;
      }
    ).catch(
      (err) => {

      }
    )
  }



  openLink(type:any){
    if(type=='branch details'){
      const url = environment.branch_details;
      window.open(url, '_blank');
    }
    else if(type == 'ivr_self_services'){
      this.layoutService.getUrlByName(type).then((res) => {
        if(res == undefined || res.length==0){
          this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
         }else{
          window.open(res[0].url, '_blank');
         }
      }).catch((e) => {
        console.log(JSON.stringify(e));
        this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
      });
    }
    else if(type == 'restructured_accounts'){
      this.layoutService.getUrlByName(type).then((res) => {
        if(res == undefined || res.length==0){
          this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
         }else{
          window.open(res[0].url, '_blank');
         }
      }).catch((e) => {
        console.log(JSON.stringify(e));
        this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
      });
    }
    else if(type == 'internet_banking'){
      this.layoutService.getUrlByName(type).then((res) => {
        if(res == undefined || res.length==0){
          this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
         }else{
          window.open(res[0].url, '_blank');
         }
      }).catch((e) => {
        console.log(JSON.stringify(e));
        this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
      });
    }
    else if(type == 'demart_service'){
      this.layoutService.getUrlByName(type).then((res) => {
        if(res == undefined || res.length==0){
          this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
         }else{
          window.open(res[0].url, '_blank');
         }
      }).catch((e) => {
        console.log(JSON.stringify(e));
        this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
      });
    }
    
    else if(type=='ad-portal'){
      
      this.layoutService.getUrlByName(type).then((res) => {
        if(res == undefined || res.length==0){
          this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
         }else{
          window.open(res[0].url, '_blank');
         }
      }).catch((e) => {
        console.log(JSON.stringify(e));
        this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
      });
    }
    else if(type=='email'){
     
      this.layoutService.getUrlByName(type).then((res) => {
        if(res == undefined || res.length==0){
          this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
         }else{
          window.open(res[0].url, '_blank');
         }
      }).catch((e) => {
        console.log(JSON.stringify(e));
        this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
      });
    }
   else if(type=='laps'){
     
    this.layoutService.getUrlByName(type).then((res) => {
      if(res == undefined || res.length==0){
        this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
       }else{
        window.open(res[0].url, '_blank');
       }
    }).catch((e) => {
      console.log(JSON.stringify(e));
      this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
    });
    }
    if(type=='hrms'){
     
      this.layoutService.getUrlByName(type).then((res) => {
        if(res == undefined || res.length==0){
          this.sharedServiceService.displayErrorMessage("No Url Found with given "+type);
         }else{
          window.open(res[0].url, '_blank');
         }
      }).catch((e) => {
        console.log(JSON.stringify(e));
        this.sharedServiceService.displayErrorMessage("Some Issue while fetching url");
      });
    }
    else if(type=='branch performance'){
      const url = environment.branch_performance;
      window.open(url, '_blank');
    }
    else if(type=='payroll'){
      const url = environment.payroll;
      window.open(url, '_blank');
    }
    
    else if(type=='leave'){
      const url = environment.leave;
      window.open(url, '_blank');
    }
    else if(type=='info'){
      const url = environment.info;
      window.open(url, '_blank');
    }
    
    else if(type=='performance'){
      const url = environment.performance;
      window.open(url, '_blank');
    }
    else if(type=='reimbursement'){
      const url = environment.reimbursement;
      window.open(url, '_blank');
    }

    else if(type=='travel'){
      const url = environment.travel;
      window.open(url, '_blank');
    }
    else if(type=='ourJourney'){
      const url = environment.ourJourney;
      window.open(url, '_blank');
    }
    else if(type=='learningDev'){
      const url = environment.learningDev;
      window.open(url, '_blank');
    }
    else if(type=='rewardRec'){
      const url = environment.rewardRec;
      window.open(url, '_blank');
    }
  }
}

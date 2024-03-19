import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MasterService } from 'src/app/master/master.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-business-head',
  templateUrl: './business-head.component.html',
  styleUrls: ['./business-head.component.scss'],
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
  ]
})
export class BusinessHeadComponent implements OnInit {

  regions: any;
  stocks: any;

  constructor(private masterService: MasterService) {
    this.stocks = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"];

  }

  ngOnInit(): void {
    this.getLoginInfo();
    this.findRegionalPerformance('South');

    this.regions = [
      { name: 'East', code: 'E' },
      { name: 'West', code: 'W' },
      { name: 'North', code: 'N' },
      { name: 'South', code: 'S' }
    ];

    this.getRegionalNews();

    const intervalObservable = interval(5000); // 5000 milliseconds = 5 seconds
    intervalObservable.subscribe(() => {
      this.getBankShare();
    });
  }

  name: any;
  role: any;
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

  currPerformance: any;
  currRegion = 'South';
  findRegionalPerformance(region: string) {
    this.currRegion = region ;
    this.masterService.getBranchPerformace(region).then(
      (res) => {
        this.currPerformance = res.additionalProp2;
      }
    ).catch(
      (err) => {
      }
    )
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


  bankShare: any;
  getBankShare() {

    var index = this.getRandomIndex();
    this.masterService.getKarnatakBankShare(this.stocks[index]).then(
      (res) => {
        this.bankShare = res;
      }
    ).catch(
      (err) => {

      }
    )
  }

  getRandomIndex(): number {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * this.stocks.length);
    return randomIndex;
  }

}

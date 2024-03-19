import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-team',
  templateUrl: './digital-team.component.html',
  styleUrls: ['./digital-team.component.scss']
})
export class DigitalTeamComponent implements OnInit {
  name: any;
  role: any;
  analyticWebTraffic: any[] = [];
  expenses: any[] = [];

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.getLoginInfo();

    this.analyticWebTraffic = [
      { channel: 'Organic search', progressValue: '32.64', conversionRate: '32.64%', avgTimeOnSite: '5m 49 s', bounceRate: '52.64%', eventSessionRatio: '1.00:1' },
      { channel: 'Direct', progressValue: '14.95', conversionRate: '14.95%', avgTimeOnSite: '0m 39 s', bounceRate: '23.64%', eventSessionRatio: '1.01:1' },
      { channel: 'Referral', progressValue: '44.56', conversionRate: '44.56%', avgTimeOnSite: '1m 32 s', bounceRate: '56.98%', eventSessionRatio: '1.02:1' },
      { channel: 'Social', progressValue: '65.23', conversionRate: '65.23%', avgTimeOnSite: '4m', bounceRate: '75.65%', eventSessionRatio: '1.00:1' },
      { channel: 'Others', progressValue: '89.17', conversionRate: '89.17%', avgTimeOnSite: '1m 12 s', bounceRate: '12.64%', eventSessionRatio: '1.03:1' },

    ];

    this.expenses = [
      { name: 'Product Promotions: ', progressValue: '92' },
      { name: 'Cross-selling and Upselling', progressValue: '76' },
      { name: 'Affiliate Marketing:', progressValue: '52' },
      { name: 'Content Marketing:', progressValue: '34' },
      { name: 'Email Campaigns', progressValue: '34' },
    ]
  }

  getLoginInfo() {
    this.name = sessionStorage.getItem('loginBy');
    this.role = sessionStorage.getItem('loginRole');
  }

}

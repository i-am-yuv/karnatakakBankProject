import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { LayoutService } from 'src/app/shared/layout/layout.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  checked: boolean = true;


   transactions = [
    {
      amount: '115K',
      details: "Deposit from customer"
    },
    {
      amount: '210K',
      details: "Withdrawal for rent payment"
    },
    {
      amount: '21K',
      details: "ATM withdrawal"
    },
    {
      amount: '345K',
      details: "Transfer from another account"
    },
    {
      amount: '32K',
      details: "Grocery shopping"
    },
    {
      amount: '441K',
      details: "Cash deposit"
    },
    {
      amount: '788K',
      details: "Credit card payment"
    }]
   
  

  constructor(private masterService : MasterService,private layoutService:LayoutService) { }

  ngOnInit(): void {
    this.layoutService.getData('reports');
  }

}

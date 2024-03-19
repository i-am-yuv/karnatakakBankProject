import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  goldLoans: any;

  rbiGuildelines = [
    {
      date: 'Mar 6, 2024',
      info: 'Arrangements with Card Networks for issue of Credit Cards',
      pdfLink: 'https://rbidocs.rbi.org.in/rdocs/notification/PDFs/FINALCIRCULARDPSSC622292228054F9BB686657192C0D8F9.PDF'
      , size: '288 kb'
    },
    {
      date: 'Mar 7, 2024',
      info: 'Amendment to the Master Direction - Credit Card and Debit Card – Issuance and Conduct Directions, 2022',
      pdfLink: 'https://rbidocs.rbi.org.in/rdocs/notification/PDFs/CIRCULARAMENDMENTTOMDA5CCCE00D45C4B6E8990BCEEE5810A87.PDF'
      , size: '691 kb'
    },
    {
      date: 'Mar 11, 2024',
      info: 'Implementation of Section 12A of the Weapons of Mass Destruction and their Delivery Systems (Prohibition of Unlawful Activities) Act, 2005: Designated List (Amendments)',
      pdfLink: 'https://rbidocs.rbi.org.in/rdocs/notification/PDFs/CIRCULARWMDACT8D157A23CB32466F98029FDB4445ABEB.PDF'
      , size: '203 kb'
    },
    {
      date: 'Mar 13, 2024',
      info: 'Cut-off time for uploading of GST, ICEGATE and TIN 2.0 luggage files',
      pdfLink: 'https://rbidocs.rbi.org.in/rdocs/notification/PDFs/NT1368306A232331B475F8E9BDE6A21F507B4.PDF'
      , size: '358 kb'
    },
    {
      date: 'Mar 13, 2024',
      info: 'Reporting and Accounting of Central Government transactions for March 2024',
      pdfLink: 'https://rbidocs.rbi.org.in/rdocs/notification/PDFs/REPORTINGACCOUNTINGD8E7308C991842018E9CB6699CAF49F4.PDF'
      , size: '360 kb'
    }
  ]

  constructor(private router: Router, private message: MessageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(30),])
    })

    this.goldLoans = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    setInterval(() => {
      this.firstVisible = this.generateRandomBoolean();
      this.secondVisible = this.generateRandomBoolean();
      this.thirdVisible = this.generateRandomBoolean();
      this.fourthVisible = this.generateRandomBoolean();

    }, 5000);
  }




  onClickLogin() {
    //    alert(JSON.stringify(this.loginForm.value));

    if (this.loginForm.value.username == '7204839067' && this.loginForm.value.password == '123456') {
      sessionStorage.setItem('loginBy', "Pooja");
      sessionStorage.setItem('loginRole', "Employee");
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 3000,
      });
      this.router.navigate(["/dashboard"]);
    }
    else if (this.loginForm.value.username == '9745899658' && this.loginForm.value.password == '123456') {
      sessionStorage.setItem('loginBy', "Narayanan");
      sessionStorage.setItem('loginRole', "Branch Manager");
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 3000,
      });
      this.router.navigate(["/dashboard/branchManager"]);
    }
    else if (this.loginForm.value.username == '7683876626' && this.loginForm.value.password == '123456') {
      sessionStorage.setItem('loginBy', "Gyana");
      sessionStorage.setItem('loginRole', "CEO Portal");
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 3000,
      });
      this.router.navigate(["/dashboard/ceoPortal"]);
    }
    else if (this.loginForm.value.username == '7300234997' && this.loginForm.value.password == '123456') {
      sessionStorage.setItem('loginBy', "Yuvraj");
      sessionStorage.setItem('loginRole', "Business head");
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 3000,
      });
      this.router.navigate(["/dashboard/business-head"]);
    }
    else if (this.loginForm.value.username == '9154794915' && this.loginForm.value.password == '123456') {
      sessionStorage.setItem('loginBy', "Kaushik");
      sessionStorage.setItem('loginRole', "Digital Team");
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 3000,
      });
      this.router.navigate(["/dashboard/digital-team"]);
    }
  }

  openWebsite(url: any) {
    window.open(url, '_blank');
  }

  firstVisible: boolean = true;
  secondVisible: boolean = true;
  thirdVisible: boolean = false;
  fourthVisible: boolean = true;

  toggleFirstVisible() {
    this.firstVisible = !this.firstVisible;
  }

  toggleSecondVisible() {
    this.secondVisible = !this.secondVisible;
  }

  toggleThirdVisible() {
    this.thirdVisible = !this.thirdVisible;
  }

  toggleFourthVisible() {
    this.fourthVisible = !this.fourthVisible;
  }


  private generateRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }

}

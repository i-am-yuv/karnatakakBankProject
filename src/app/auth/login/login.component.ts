import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Checkbox } from 'primeng/checkbox';
import { MasterService } from 'src/app/master/master.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  goldLoans: any;
  passwordVisible = false;

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

  yourForm !: FormGroup;

  constructor(private router: Router, private message: MessageService, private formBuilder: FormBuilder,
    private masterService: MasterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', [])
    })

    this.goldLoans = [
      { name: 'mumbai', code: 'MUM' },
      { name: 'delhi', code: 'DEL' },
      { name: 'kolkata', code: 'KOL' },
      { name: 'chennai', code: 'CHE' }
    ];

    setInterval(() => {
      this.firstVisible = this.generateRandomBoolean();
      this.secondVisible = this.generateRandomBoolean();
      this.thirdVisible = this.generateRandomBoolean();
      this.fourthVisible = this.generateRandomBoolean();

    }, 5000);

    this.yourForm = this.formBuilder.group({
      selectedCity: ['chennai'] // Default value 'chennai' (code: 'CHE')
    });
    this.findGoldRate('chennai');
  }

  isLessThan800px() {
    const screenWidth = window.innerWidth;
    // Return true if screen width is less than 800px, otherwise false
    return screenWidth < 800;
  }

  toggleFieldTextType() {
    this.passwordVisible = !this.passwordVisible;
  }

  loading: boolean = false;
  onClickLogin() {
    //    alert(JSON.stringify(this.loginForm.value));

    // if (this.loginForm.value.username == '7204839067' && this.loginForm.value.password == '123456') {
    //   sessionStorage.setItem('loginBy', "Pooja");
    //   sessionStorage.setItem('loginRole', "Employee");
    //   this.message.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Login Successfully',
    //     life: 2000,
    //   });
    //   setTimeout(() => {
    //     this.router.navigate(["/dashboard"]);
    //   }, 2000);
    // }
    // else if (this.loginForm.value.username == '9745899658' && this.loginForm.value.password == '123456') {
    //   sessionStorage.setItem('loginBy', "Narayanan");
    //   sessionStorage.setItem('loginRole', "Branch Manager");
    //   this.message.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Login Successfully',
    //     life: 2000,
    //   });
    //   setTimeout(() => {
    //     this.router.navigate(["/dashboard/branchManager"]);
    //   }, 2000);

    // }
    // else if (this.loginForm.value.username == '7683876626' && this.loginForm.value.password == '123456') {
    //   sessionStorage.setItem('loginBy', "Gyana");
    //   sessionStorage.setItem('loginRole', "CEO Portal");
    //   this.message.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Login Successfully',
    //     life: 2000,
    //   });

    //   setTimeout(() => {
    //     this.router.navigate(["/dashboard/ceoPortal"]);
    //   }, 2000);

    // }
    // else if (this.loginForm.value.username == '7300234997' && this.loginForm.value.password == '123456') {
    //   sessionStorage.setItem('loginBy', "Yuvraj");
    //   sessionStorage.setItem('loginRole', "Business Head Manager");
    //   this.message.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Login Successfully',
    //     life: 3000,
    //   });
    //   this.router.navigate(["/dashboard/business-head"]);
    // }

    this.loading = true; // loader 
    this.authService.authenticate(this.loginForm.value).then((res) => {

      alert(JSON.stringify(res));
      sessionStorage.setItem('token', res.jwt);
      sessionStorage.setItem('refreshToken', res.refreshToken);
      this.navigateToDashboard();
    })
      .catch((err) => {
        
      alert(JSON.stringify(err));
        this.loading = false;
      })
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

  goldRate: any;
  findGoldRate(city: string) {

    this.masterService.getGoldRateByCity(city).then(
      (res) => {
        this.goldRate = res;
      }
    ).catch(
      (err) => {
        var text = err.error.text;
        var any = text.split(':');;
        this.goldRate = any[1];
        console.log(err);
      }
    )
  }

  navigateToDashboard() {
    
      alert("navigateToDashboard");
      

    var username = this.authService.getUserName();
    var roles = this.authService.getRoles();

    alert("navigateToDashboard>>>"+username+"   "+roles);
      
    //  alert(username);
    //  alert(roles);

alert("username == 'ramesh_splenta'>>>   "+(username == 'ramesh_splenta'));
    if (username == 'ramesh_splenta') {
      sessionStorage.setItem('loginBy', "Ramesh");
      sessionStorage.setItem('loginRole', roles);
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 2000,
      });
      setTimeout(() => {
        this.router.navigate(["/dashboard"]);
      }, 2000);
    }
    else if (username == '9745899658') {
      sessionStorage.setItem('loginBy', "Narayanan");
      sessionStorage.setItem('loginRole', roles);
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 2000,
      });
      setTimeout(() => {
        this.router.navigate(["/dashboard/branchManager"]);
      }, 2000);

    }
    else if (username == '7683876626') {
      sessionStorage.setItem('loginBy', "Gyana");
      sessionStorage.setItem('loginRole', roles);
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 2000,
      });

      setTimeout(() => {
        this.router.navigate(["/dashboard/ceoPortal"]);
      }, 2000);

    }
    else if (username == '7300234997') {
      sessionStorage.setItem('loginBy', "Yuvraj");
      sessionStorage.setItem('loginRole', roles);
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 3000,
      });
      this.router.navigate(["/dashboard/business-head"]);
    }
    else if (username == '9154794915') {
      sessionStorage.setItem('loginBy', "kaushik");
      sessionStorage.setItem('loginRole', roles);
      this.message.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
        life: 3000,
      });
      this.router.navigate(["/dashboard/digital-team"]);
    }
this.loading = false;
  }

}

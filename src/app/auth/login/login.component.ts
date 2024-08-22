import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Checkbox } from 'primeng/checkbox';
import { MasterService } from 'src/app/master/master.service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { SharedServiceService } from 'src/app/shared-service.service';
import { QuicklinkService } from 'src/app/master/quick-links/quicklink.service';
import { LayoutService } from 'src/app/shared/layout/layout.service';

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

  constructor(private layoutService: LayoutService, private quicklinkService: QuicklinkService, private router: Router, private message: MessageService, private formBuilder: FormBuilder,
    private masterService: MasterService, private authService: AuthService, private sharedService: SharedServiceService) { }

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

    var userName = this.loginForm.get('username')?.value;
    var password = this.loginForm.get('password')?.value;
    if (userName == undefined || password == undefined) {
      //      this.sharedService.displayErrorMessage("Please Enter username and password");
      this.sharedService.displayErrorMessage("Please Enter username and password");
      return;
    }

    this.loading = true; // loader 
    this.authService.authenticate(this.loginForm.value).then((res) => {

      //alert(JSON.stringify(res));
      sessionStorage.setItem('token', res.jwt);
      sessionStorage.setItem('refreshToken', res.refreshToken);
      this.navigateToDashboard(res);
      //  this.displaySuccessMessage("Login Successful");
      // this.sharedService.displaySuccessMessage("Login Successful").then(() => {

      //   });
      // this.navigateToDashboard(res);
      //this.notifySuccess("Login Successful");
      // this.message.add({
      //   severity: 'success',
      //   summary: 'Success',
      //   detail: 'Login Successful',
      //   life: 2000,
      // });
    })
      .catch((err) => {

        this.sharedService.displayErrorMessage("Login Failed or Invalid AD Credentials Try Again");
        // this.message.add({
        //   severity: 'error',
        //   summary: 'Error',
        //   detail: 'Login Failed or Invalid AD Credentials',
        //   life: 2000,
        // });
        console.log("login error>>>>" + JSON.stringify(err));
        this.loading = false;
      })
  }
  notifySuccess(message: string) {
    this.message.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000,
      styleClass: 'custom-toast-center'
    });
  }
  notifyError(message: string) {
    this.message.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 1000,
      styleClass: 'custom-toast-center'
    });
  }
  notifyInfo(message: string) {
    this.message.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
      life: 1000,
      styleClass: 'custom-toast-center-warning'
    });
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

  forgetPassword() {

    this.notifyInfo("Please Contact Your AD Adminstrator");
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
        console.log(JSON.stringify(err));
      }
    )
  }

  navigateToDashboard(res: any) {

    // alert("navigateToDashboard");


    var username = this.authService.getUserName();
    var roles = this.authService.getRoles();

    //  alert("navigateToDashboard>>>"+username+"   "+roles);

    //  alert(username);
    //  alert(roles);

    //alert("username == 'splenta_ramesh'>>>   "+(username === 'ramesh_splenta'));
    if (true) {
      sessionStorage.setItem('loginBy', res.displayName);
      sessionStorage.setItem('loginRole', roles);
      this.router.navigate(["/dashboard"]);

      // setTimeout(() => {

      // }, 1000);
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

  rbiGuildelinesUpdate() {
    this.notifyInfo("Site Under Construction");
  }
  openLink(typeOfCircular: any) {

    if (typeOfCircular == '5 since') {
      var url='http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.DirectSearch.php?days=1';
      
      window.open(url, '_blank');
      // this.layoutService.getUrlByName("icircularfor5days").then((res) => {

      // })
    }
    else if (typeOfCircular == '20 since') {
      
      var url='http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.DirectSearch.php?days=7';
      
      window.open(url, '_blank');
      // this.sharedService.displayInfoMessage("Coming Soon..");
      // this.layoutService.getUrlByName("icircularfor20days").then((res) => {
        
      // })
    }
    else if (typeOfCircular == '108 since') {
      var url='http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.DirectSearch.php?days=30';
      
      window.open(url, '_blank');
      // this.sharedService.displayInfoMessage("Coming Soon..");
      // this.layoutService.getUrlByName("icircularfor108days").then((res) => {

      // })
    }
  }
}


import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CheckIn, CheckOut } from './checkkIn';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  name: any;
  role: any;

  isCheckIn: boolean = true;
  // mobile view checkin and checkout state
  // checkedIn!: boolean;

  extendBranchDetails = false;
  extendHRCorner = false;

  constructor(private router: Router, private message: MessageService, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getLoginInfo();
    this.checkTabletView();

    // if (this.checkedIn = true) {
    //   this.checkInTime();
    // }
  }

  getLoginInfo() {
    this.name = sessionStorage.getItem('loginBy');
    this.role = sessionStorage.getItem('loginRole');

  }


  locationName!: any;
  logintime!: any;
  checkIn!: CheckIn;
  checkOut!: CheckOut;

  checkInTime() {
    // this.checkedIn = true;
    this.isCheckIn = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude + "   " + longitude);

        this.checkIn.latitude = position.coords.latitude;
        this.checkIn.longitude = position.coords.longitude;

        this.authService.docheckIn(this.checkIn).then((res: any) => {
          this.isCheckIn = true;
          console.log(JSON.stringify(res));
          this.message.add({
            severity: 'sucess',
            summary: 'Successfully CheckedIn',
            detail: 'Successfully CheckedIn',
            life: 3000,
          });
        })
        // Using OpenStreetMap Nominatim API
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        this.http.get(apiUrl).subscribe((data: any) => {
          this.locationName = data.display_name;
          console.log('Location Name:', this.locationName);

        }, (error: any) => {
          console.error('Nominatim API error:', error);
        });
      },
        (error) => {
          console.error('Error getting geolocation:', error.message);
        });
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  checkOutTime() {
    // this.checkedIn = false;
    this.isCheckIn = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(latitude + "   " + longitude);


        this.checkOut.latitude = position.coords.latitude;
        this.checkOut.longitude = position.coords.longitude;

        this.authService.docheckOut(this.checkOut).then((res: any) => {
          console.log(JSON.stringify(res));
          this.isCheckIn = false;
          this.message.add({
            severity: 'sucess',
            summary: 'Successfully CheckedOut',
            detail: 'Successfully CheckedOut',
            life: 3000,
          });
        });
        // Using OpenStreetMap Nominatim API
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        this.http.get(apiUrl).subscribe((data: any) => {
          this.locationName = data.display_name;
          console.log('Location Name:', this.locationName);

        }, (error: any) => {
          console.error('Nominatim API error:', error);
        });
      },
        (error) => {
          console.error('Error getting geolocation:', error.message);
        });
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  findDashboard() {
    if (this.name == 'Pooja') {
      this.router.navigate(["/dashboard"]);
    }
    else if (this.name == 'Narayanan') {
      this.router.navigate(["/dashboard/branchManager"]);
    }
    else if (this.name == 'Gyana') {
      this.router.navigate(["/dashboard/ceoPortal"]);
    }
    else if (this.name == 'Yuvraj') {
      this.router.navigate(["/dashboard/business-head"]);
    }
    else if (this.name == 'kaushik') {
      this.router.navigate(["/dashboard/digital-team"]);
    }
  }

  isCompressed: boolean = false;

  togglePanel() {
    this.isCompressed = !this.isCompressed;
  }

  navigateToHome() {
    // Your logic to navigate to the home page
  }

  toggleBranchDetails() {
    this.extendBranchDetails = !this.extendBranchDetails;
  }

  toggleHRCorner() {
    this.extendHRCorner = !this.extendHRCorner;
  }

  logout() {
    // Your logic to handle logout
  }

  // code for left pannel removal for less than tablet view
  isTabletView: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkTabletView();
  }

  checkTabletView() {
    this.isTabletView = window.innerWidth < 1000;
  }

  sidebarVisible: boolean = false;

  hyperlinkCircular() {
    const url = 'http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.ViewFolder.php';
    window.open(url, '_blank');
  }

  hyperlinkHelpdesk() {
    const url = 'http://172.16.202.111:8025/index.php';
    window.open(url, '_blank');
  }

}

// import { HttpClient } from '@angular/common/http';
// import { Component, HostListener, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/auth/auth.service';
// import { CheckIn, CheckOut } from './checkkIn';
// import { MessageService } from 'primeng/api';

// @Component({
//   selector: 'app-layout',
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.scss']
// })
// export class LayoutComponent implements OnInit {

//   name: any;
//   role: any;

//   isCheckIn: boolean = true;
//   // mobile view checkin and checkout state
//   // checkedIn!: boolean;

//   extendBranchDetails = false;
//   extendHRCorner = false;

//   constructor(private router: Router, private message: MessageService, private http: HttpClient, private authService: AuthService) { }

//   ngOnInit(): void {
//     this.getLoginInfo();
//     this.checkTabletView();

//     // if (this.checkedIn = true) {
//     //   this.checkInTime();
//     // }
//   }

//   getLoginInfo() {
//     this.name = sessionStorage.getItem('loginBy');
//     this.role = sessionStorage.getItem('loginRole');

//   }


//   locationName!: any;
//   logintime!: any;
//   checkIn!: CheckIn;
//   checkOut!: CheckOut;

//   checkInTime() {
//     this.isCheckIn = true;
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const latitude = position.coords.latitude;
//           const longitude = position.coords.longitude;

//           console.log(latitude + "   " + longitude);

//           this.checkIn = {
//             "latitude": position.coords.latitude,
//             "longitude": position.coords.longitude,
//             "empId": this.authService.getUserName()
//           };
//           // this.checkIn.latitude = position.coords.latitude;
//           // this.checkIn.longitude = position.coords.longitude;

//           this.authService.docheckIn(this.checkIn).then((res: any) => {
//             if (res.status == 'fail') {
//               this.message.add({
//                 severity: 'error',
//                 summary: 'Error Checkout',
//                 detail: res.msg,
//                 life: 3000,
//               });
//             }
//             else {
//               this.isCheckIn = true;
//               console.log(JSON.stringify(res));
//               this.message.add({
//                 severity: 'sucess',
//                 summary: 'Successfully CheckedIn',
//                 detail: 'Successfully CheckedIn',
//                 life: 3000,
//               });
//             }

//           }).catch((e) => {
//             this.message.add({
//               severity: 'error',
//               summary: 'Successfully CheckedOut',
//               detail: 'Successfully CheckedOut',
//               life: 3000,
//             });
//           });
//           // // Using OpenStreetMap Nominatim API
//           // const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

//           // this.http.get(apiUrl).subscribe(
//           //   (data: any) => {
//           //     this.locationName = data.display_name;
//           //     console.log('Location Name:', this.locationName);

//           //   },
//           //   (error: any) => {
//           //     console.error('Nominatim API error:', error);

//           //   }
//           // );
//         },
//         (error) => {
//           console.error('Error getting geolocation:', error.message);

//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');

//     }
//   }

//   checkOutTime() {
//     this.isCheckIn = true;
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const latitude = position.coords.latitude;
//           const longitude = position.coords.longitude;

//           console.log(latitude + "   " + longitude);


//           this.checkOut = {
//             "latitude": position.coords.latitude,
//             "longitude": position.coords.longitude,
//             "empId": this.authService.getUserName()
//           };

//           console.log(JSON.stringify(this.checkOut))
//           this.authService.docheckOut(this.checkOut, position.coords.longitude, position.coords.latitude).then((res: any) => {
//             console.log(JSON.stringify(res));
//             if (res.status == 'fail') {
//               this.message.add({
//                 severity: 'error',
//                 summary: 'Error Checkout',
//                 detail: res.msg,
//                 life: 3000,
//               });
//             }
//             else {
//               this.isCheckIn = false;
//               this.message.add({
//                 severity: 'sucess',
//                 summary: 'Successfully CheckedOut',
//                 detail: 'Successfully CheckedOut',
//                 life: 3000,
//               });
//             }


//           }).catch((e) => {
//             this.message.add({
//               severity: 'error',
//               summary: 'Successfully CheckedOut',
//               detail: 'Successfully CheckedOut',
//               life: 3000,
//             });
//           });
//           // Using OpenStreetMap Nominatim API
//           // const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

//           // this.http.get(apiUrl).subscribe(
//           //   (data: any) => {
//           //     this.locationName = data.display_name;
//           //     console.log('Location Name:', this.locationName);

//           //   },
//           //   (error: any) => {
//           //     console.error('Nominatim API error:', error);

//           //   }
//           // );
//         },
//         (error) => {
//           console.error('Error getting geolocation:', error.message);

//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');

//     }
//   }

//   findDashboard() {
//     if (this.name == 'Pooja') {
//       this.router.navigate(["/dashboard"]);
//     }
//     else if (this.name == 'Narayanan') {
//       this.router.navigate(["/dashboard/branchManager"]);
//     }
//     else if (this.name == 'Gyana') {
//       this.router.navigate(["/dashboard/ceoPortal"]);
//     }
//     else if (this.name == 'Yuvraj') {
//       this.router.navigate(["/dashboard/business-head"]);
//     }
//     else if (this.name == 'kaushik') {
//       this.router.navigate(["/dashboard/digital-team"]);
//     }
//   }

//   isCompressed: boolean = false;

//   togglePanel() {
//     this.isCompressed = !this.isCompressed;
//   }

//   navigateToHome() {
//     // Your logic to navigate to the home page
//   }

//   toggleBranchDetails() {
//     this.extendBranchDetails = !this.extendBranchDetails;
//   }

//   toggleHRCorner() {
//     this.extendHRCorner = !this.extendHRCorner;
//   }

//   logout() {
//     // Your logic to handle logout
//   }

//   // code for left pannel removal for less than tablet view
//   isTabletView: boolean = false;
//   @HostListener('window:resize', ['$event'])
//   onResize(event: any) {
//     this.checkTabletView();
//   }

//   checkTabletView() {
//     this.isTabletView = window.innerWidth < 1000;
//   }

//   sidebarVisible: boolean = false;

//   hyperlinkCircular() {
//     const url = 'http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.ViewFolder.php';
//     window.open(url, '_blank');
//   }

//   hyperlinkHelpdesk() {
//     const url = 'http://172.16.202.111:8025/index.php';
//     window.open(url, '_blank');
//   }

// }




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
  notifySuccess(message: string) {
    this.message.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 1000,
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
  checkInTime() {
    this.isCheckIn = false;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(latitude + "   " + longitude);

          this.checkIn = {
            "latitude": position.coords.latitude,
            "longitude": position.coords.longitude,
            "empId": this.authService.getUserName()
          };
          // this.checkIn.latitude = position.coords.latitude;
          // this.checkIn.longitude = position.coords.longitude;

          this.authService.docheckIn(this.checkIn).then((res: any) => {
            this.checkIn=res?.user?.checkIn;
            if (res.status == 'fail') {
              this.notifyError("Error In CheckIn");
              // this.message.add({
              //   severity: 'error',
              //   summary: 'Error In CheckIn',
              //   detail: res.msg,
              //   life: 3000,
              // });
            }
            else {
              this.isCheckIn = false;
              console.log(JSON.stringify(res));

              this.notifySuccess("Successfully CheckedIn");
              // this.message.add({
              //   severity: 'sucess',
              //   summary: 'Successfully CheckedIn',
              //   detail: 'Successfully CheckedIn',
              //   life: 3000,
              //   styleClass: 'custom-toast-center'
              // });
            }

          }).catch((e) => { 

            alert(JSON.stringify(e));
            this.notifyError("Issue Happend While CheckIn");
              
            // this.message.add({
            //   severity: 'sucess',
            //   summary: 'Successfully CheckedOut',
            //   detail: 'Successfully CheckedOut',
            //   styleClass: 'custom-toast-center',
            //   life: 3000,
            // });
          });
          // // Using OpenStreetMap Nominatim API
          // const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

          // this.http.get(apiUrl).subscribe(
          //   (data: any) => {
          //     this.locationName = data.display_name;
          //     console.log('Location Name:', this.locationName);

          //   },
          //   (error: any) => {
          //     console.error('Nominatim API error:', error);

          //   }
          // );
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);

        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');

    }
  }

  checkOutTime() {
    this.isCheckIn = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(latitude + "   " + longitude);


          this.checkOut = {
            "latitude": position.coords.latitude,
            "longitude": position.coords.longitude,
            "empId": this.authService.getUserName()
          };

          console.log(JSON.stringify(this.checkOut))
          this.authService.docheckOut(this.checkOut, position.coords.longitude, position.coords.latitude).then((res: any) => {
            console.log(JSON.stringify(res));
            this.checkOut=res?.user?.checkIn;
            if (res.status == 'fail') {

              this.notifyError("Error In Checkout");
              
              // this.message.add({
              //   severity: 'error',
              //   summary: 'Error Checkout',
              //   detail: res.msg,
              //   styleClass: 'custom-toast-center',
              //   life: 3000,
              // });
            }
            else {
              this.isCheckIn = true;
              this.notifySuccess("Successfully CheckedOut");
              // this.message.add({
              //   severity: 'sucess',
              //   summary: 'Successfully CheckedOut',
              //   detail: 'Successfully CheckedOut',
              //   life: 3000,
              //   styleClass: 'custom-toast-center'
              // });
            }


          }).catch((e) => {

            alert(JSON.stringify(e));
            this.notifyError("Issue Happend While CheckedOut");
              
            // this.message.add({
            //   severity: 'error',
            //   summary: 'Successfully CheckedOut',
            //   detail: 'Successfully CheckedOut',
            //   life: 3000,
            //   styleClass: 'custom-toast-center'
            // });
          });
          // Using OpenStreetMap Nominatim API
          // const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

          // this.http.get(apiUrl).subscribe(
          //   (data: any) => {
          //     this.locationName = data.display_name;
          //     console.log('Location Name:', this.locationName);

          //   },
          //   (error: any) => {
          //     console.error('Nominatim API error:', error);

          //   }
          // );
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);

        }
      );
    } else {
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


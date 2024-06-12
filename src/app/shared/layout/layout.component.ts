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
import { CheckIn, CheckOut, TimeSheet } from './checkkIn';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NotificationService } from 'src/app/master/notification/notification.service';
import { environment } from 'src/environments/environment';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  name: any;
  role: any;
totalRecords:number=0;
  isCheckIn: boolean = true;
  // mobile view checkin and checkout state
  // checkedIn!: boolean;

  extendBranchDetails = false;
  extendHRCorner = false;

  constructor(private router: Router,private messageService: MessageService,private notificationService:NotificationService,
    private confirmationService: ConfirmationService, private message: MessageService, 
    private http: HttpClient, private authService: AuthService,
  private sharedService:SharedServiceService) { }
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.sharedService.methodCalled$.subscribe(() => {
      this.fetchCheckInData();
    });
    this.getLoginInfo();
    this.checkTabletView();
    this.notificationService.getEmployeeLateRequests(0,1000000,'','ASC').then((res:any)=>{

      res.content.forEach((element:any) => {
        if(!element.reject && !element.approve){
          this.totalRecords=this.totalRecords+1;
        }
      });
      //this.totalRecords=res.totalElements;
    });
    // if (this.checkedIn = true) {
    //   this.checkInTime();
    // }

    
  }
  fetchCheckInData() {
    this.authService.getUser().then((res)=>{
      this.isCheckIn=res.checkIn;
    })
    // Add the logic you want to execute in Component B
  }
  getLoginInfo() {
    this.name = sessionStorage.getItem('loginBy');
    this.role = sessionStorage.getItem('loginRole');
    this.authService.getUser().then((res)=>{
      this.isCheckIn=res.checkIn;
    })
  }
  timesheet!:TimeSheet;
  timesheetDialog!:boolean;
  submitted!: boolean;
  sendToAprover(timesheet:TimeSheet){


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(latitude + "   " + longitude);
          timesheet.latitude=position.coords.latitude;
          timesheet.longitude=position.coords.longitude;
          
          this.authService.sendToAprover(timesheet).then((res:any)=>{

            this.notifySuccess("Successfully Submitted for approval");
            this.timesheetDialog=false;
      
          }).catch((err=>{
            //alert(JSON.stringify(err));
            this.notifyError("Something issue happend");
          }));
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);

        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');

    }



   
  }
  openNew() {
    this.timesheet = {};
    this.submitted = false;
    this.timesheetDialog = true;
  }
  hideDialog() {
    this.timesheetDialog = false;
    this.submitted = false;
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
  notifyInfo(message: string) {
    this.message.add({
      severity: 'warn',
      summary: 'Warning',
      detail: message,
      life: 1000,
      styleClass: 'custom-toast-center-warning'
    });
  }

  currentTime!: string;
  checkInTimee!: Date;
  isBeforeDeadline!: boolean;
  checkInTime() {

    this.notificationService.checkAnyRequestExistByUser(this.authService.getUserName()).then((res:any)=>{
      if(res){
        this.notifyInfo("You have already raised checkin request so wait for approval ");
        return;
      }
      else{
        this.checkInTimee = new Date();
        const deadline = new Date();
        deadline.setHours(6, 15, 0, 0); // Set the deadline to 9:45 AM
    
        this.isBeforeDeadline = this.checkInTimee < deadline;
        //on time
        if(this.isBeforeDeadline){
         
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
                  if (res.status==false || res.status=="false") {
                    this.notifyError(res.msg);
                    // this.message.add({
                    //   severity: 'error',
                    //   summary: 'Error In CheckIn',
                    //   detail: res.msg,
                    //   life: 3000,
                    // });
                  }
                  else {
                    this.isCheckIn = true;
                    console.log(JSON.stringify(res));
                   
                    this.notifySuccess(res.msg);
                    // this.message.add({
                    //   severity: 'sucess',
                    //   summary: 'Successfully CheckedIn',
                    //   detail: 'Successfully CheckedIn',
                    //   life: 3000,
                    //   styleClass: 'custom-toast-center'
                    // });
                  }
      
                }).catch((e) => { 
      
                 this.notifyError("Issue Happend While CheckIn");
                    
                
                });
              },
              (error) => {
                console.error('Error getting geolocation:', error.message);
      
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
      
          }
        }
        else{
          //check in time over so need to implement maker checker flow
          this.notifyError("Your allowed checkin time has over so please submit request to your reporting manager");
          this.timesheetDialog=true;
          this.timesheet={};
          this.timesheet.approvername="KH REDDY";
          this.timesheet.username=this.authService.getUserName();
    
        }
      }
    });
   
  }
  //  isToday(date: Date): boolean {
  //   const today = new Date();
  
  //   // Extract year, month, and day
  //   const todayYear = today.getFullYear();
  //   const todayMonth = today.getMonth();
  //   const todayDay = today.getDate();
  
  //   const dateYear = date.getFullYear();
  //   const dateMonth = date.getMonth();
  //   const dateDay = date.getDate();
  
  //   // Compare year, month, and day
  //   return todayYear === dateYear && todayMonth === dateMonth && todayDay === dateDay;
  // }
  checkOutTimee!: Date;
  checkOutTime() {

    // this.authService.getUser().then((res)=>{
    //     if(res){
    //       var checkoutTime=res.checkOutTime;
    //       var isCheckout=res.checkout;

    //         alert(this.isToday(checkoutTime) && isCheckout==true)
    //       if(this.isToday(checkoutTime) && isCheckout==true){
    //         this.notifyError("You have already checkedout for the day");
    //         return;

    //       }

    //     }
    // })
    


    this.checkOutTimee = new Date();
    const deadline = new Date();
    deadline.setHours(18, 0o0, 0, 0); // Set the deadline to 6:00 PM

    this.isBeforeDeadline = this.checkOutTimee < deadline;


    this.confirmationService.confirm({
      message: 'Are you sure you want to Checkout?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {


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
                if (res.status==false || res.status=="false") {
    
                  this.notifyError(res.msg);
                  
                  // this.message.add({
                  //   severity: 'error',
                  //   summary: 'Error Checkout',
                  //   detail: res.msg,
                  //   styleClass: 'custom-toast-center',
                  //   life: 3000,
                  // });
                }
                else {
                  this.isCheckIn = false;
                  this.notifySuccess(res.msg);
                  // this.message.add({
                  //   severity: 'sucess',
                  //   summary: 'Successfully CheckedOut',
                  //   detail: 'Successfully CheckedOut',
                  //   life: 3000,
                  //   styleClass: 'custom-toast-center'
                  // });
                }
    
    
              }).catch((e) => {
    
             
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
      },
    });


 
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
    const url = environment.hyperLinkCircular;
    window.open(url, '_blank');
  }

  hyperlinkHelpdesk() {
    const url = environment.helpDeskUrl;
    window.open(url, '_blank');
  }
  hyperlinkDocumentCenter(){
    const url = environment.fold;
    window.open(url, '_blank');
  }
}


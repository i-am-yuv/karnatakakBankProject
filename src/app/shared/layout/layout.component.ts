import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CheckIn, CheckOut, LeaveData, TimeSheet } from './checkkIn';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NotificationService } from 'src/app/master/notification/notification.service';
import { environment } from 'src/environments/environment';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Subscription } from 'rxjs';
import { LayoutService } from './layout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  name: any;
  role: any;
  totalRecords: number = 0;
  leaveData: LeaveData[] = [];
  isCheckIn: boolean = false;
  // mobile view checkin and checkout state
  // checkedIn!: boolean;

  extendBranchDetails = false;
  extendHRCorner = false;
  currentPage !: string;
  constructor(private layoutS: LayoutService, private router: Router, private messageService: MessageService, private notificationService: NotificationService,
    private confirmationService: ConfirmationService, private message: MessageService,
    private http: HttpClient, private authService: AuthService,
    private sharedService: SharedServiceService) {
    this.currentPage = '';
  }
  private subscription!: Subscription;

  get(val: any) {

    console.log("val>>> " + val)
    return JSON.stringify(val);
  }
  ngOnInit(): void {
    this.subscription = this.sharedService.methodCalled$.subscribe(() => {
      this.fetchCheckInData();
    });
    this.layoutS.currentPageData.subscribe(
      (res) => {
        console.log(res);
        this.currentPage = res;

      },
      (err) => {
        this.currentPage = 'dashboard';

      }
    )
    this.getLoginInfo();
    this.checkTabletView();
    this.notificationService.getEmployeeLateRequests(0, 1000000, '', 'ASC').then((res: any) => {

      res.content.forEach((element: any) => {
        if (!element.reject && !element.approve) {
          this.totalRecords = this.totalRecords + 1;
        }
      });
      //this.totalRecords=res.totalElements;
    });
    // if (this.checkedIn = true) {
    //   this.checkInTime();
    // }


  }
  fetchCheckInData() {
    this.authService.getUser().then((res) => {
      this.isCheckIn = res.checkIn;
    })
    // Add the logic you want to execute in Component B
  }
  getLoginInfo() {
    this.name = sessionStorage.getItem('loginBy');
    this.role = sessionStorage.getItem('loginRole');
    this.authService.getUser().then((res) => {
      this.isCheckIn = res.checkIn;
    })
  }
  timesheet!: TimeSheet;
  timesheetDialog!: boolean;
  submitted!: boolean;
  sendToAprover(timesheet: TimeSheet) {


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(latitude + "   " + longitude);
          timesheet.latitude = position.coords.latitude;
          timesheet.longitude = position.coords.longitude;

          this.authService.sendToAprover(timesheet).then((res: any) => {

            this.sharedService.displaySuccessMessage("Successfully Submitted for approval");
            this.notificationService.getEmployeeLateRequests(0, 1000000, '', 'ASC').then((res: any) => {

              res.content.forEach((element: any) => {
                if (!element.reject && !element.approve) {
                  this.totalRecords = this.totalRecords + 1;

                }
              });
              //this.totalRecords=res.totalElements;
            });

            this.timesheetDialog = false;

          }).catch((err => {
            //alert(JSON.stringify(err));
            this.sharedService.displayErrorMessage("Something issue happend");
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
      life: 3000,
      styleClass: 'custom-toast-center'
    });
  }
  notifyError(message: string) {
    this.message.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 4000,
      styleClass: 'custom-toast-center'
    });
  }
  notifyInfo(message: string) {
    this.message.add({
      severity: 'warn',
      summary: 'Warning',
      detail: message,
      life: 4000,
      styleClass: 'custom-toast-center-warning'
    });
  }

  currentTime!: string;
  checkInTimee!: Date;
  isBeforeDeadline!: boolean;
  displayPopup: boolean = false;
  cols!: any;
  isDaycheckIn: boolean = false;
  async checkInTime(): Promise<void> {
    if (await this.checkDayCheckIn() && await this.checkLeaves() && await this.checkExistingRequest()) {
      await this.performCheckIn();
    }


    // //check Already checkin for the day or not

    // this.authService.getUser().then((res) => {
    //   if (res.dayCheckIn == true) {
    //     this.sharedService.displayInfoMessage("You have already checkedIn For the Day");
    //     this.isDaycheckIn=true;
    //   }
    // })
    // ///checkign any leaves in hrms
    // this.notificationService.checkLeaves(this.authService.getUserName()).then((res) => {
    //   this.leaveData = res;

    //   if (this.leaveData) {
    //     this.displayPopup = true;

    //     setTimeout(() => {
    //       this.displayPopup = false;
    //     }, 3000);
    //   }

    // }).catch((e) => {
    //   this.sharedService.displayErrorMessage("Some Error occured while checking absentData");
    // });
    // setTimeout(() => {
    //   this.displayPopup = false;

    //   this.notificationService.checkAnyRequestExistByUser(this.authService.getUserName()).then((res: any) => {
    //     if (res) {
    //       this.sharedService.displayInfoMessage("You have already raised checkin request so wait for approval ");
    //       return;
    //     }
    //     else {
    //       this.checkInTimee = new Date();
    //       const deadline = new Date();
    //       deadline.setHours(9, 45, 0, 0); // Set the deadline to 9:45 AM

    //       this.isBeforeDeadline = this.checkInTimee < deadline;
    //       //on time
    //       if (this.isBeforeDeadline) {

    //         if (navigator.geolocation) {
    //           navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //               const latitude = position.coords.latitude;
    //               const longitude = position.coords.longitude;

    //               console.log(latitude + "   " + longitude);

    //               this.checkIn = {
    //                 "latitude": position.coords.latitude,
    //                 "longitude": position.coords.longitude,
    //                 "empId": this.authService.getUserName()
    //               };

    //               this.authService.docheckIn(this.checkIn).then((res: any) => {
    //                 this.checkIn = res?.user?.checkIn;
    //                 if (res.status == false || res.status == "false") {
    //                   this.sharedService.displayErrorMessage(res.msg);

    //                 }
    //                 else {
    //                   this.isCheckIn = true;
    //                   console.log(JSON.stringify(res));

    //                   this.sharedService.displaySuccessMessage(res.msg);

    //                 }

    //               }).catch((e) => {

    //                 this.sharedService.displayErrorMessage("Issue Happend While CheckIn");


    //               });
    //             },
    //             (error) => {
    //               console.error('Error getting geolocation:', error.message);

    //             }
    //           );
    //         } else {
    //           console.error('Geolocation is not supported by this browser.');

    //         }
    //       }
    //       else {
    //         //check in time over so need to implement maker checker flow
    //         this.sharedService.displayInfoMessage("Your allowed checkin time has over so please submit request to your reporting manager");
    //         this.layoutS.getManagerNameByEmployee(this.authService.getUserName().substring(1, this.authService.getUserName().length)).then((res: any) => {
    //           this.timesheetDialog = true;
    //           this.timesheet = {};
    //           if (res) {
    //             var approverName = res?.supervisors[0]?.supervisorId;
    //             this.timesheet.approvername = approverName;
    //             this.timesheet.username = this.authService.getUserName();
    //           }
    //         }).catch((e: any) => {
    //           this.sharedService.displayErrorMessage("Error occured while fetching Reporting Manager");
    //         });


    //       }
    //     }
    //   });
    // }, 2000);


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
  async checkOutTime() {
    this.checkOutTimee = new Date();
    const deadline = new Date();
    deadline.setHours(18, 0o0, 0, 0); // Set the deadline to 6:00 PM

    this.isBeforeDeadline = this.checkOutTimee < deadline;
    
    if (this.isBeforeDeadline == true) {
      const result = await this.displayCheckOutMessage("CheckOut Update");
      if (result == true) {
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
                this.checkOut = res?.user?.checkIn;
                if (res.status == false || res.status == "false") {

                  this.sharedService.displayErrorMessage(res.msg);
                }
                else {
                  this.isCheckIn = false;
                  this.sharedService.displaySuccessMessage(res.msg);

                }


              }).catch((e) => {
                this.sharedService.displayErrorMessage("Issue Happend While CheckedOut");
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
    }
    else {

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
            this.authService.docheckOut(this.checkOut, position.coords.longitude, position.coords.latitude).then(async (res: any) => {
              console.log(JSON.stringify(res));
              this.checkOut = res?.user?.checkIn;
              if (res.status == false || res.status == "false") {

                this.sharedService.displayErrorMessage(res.msg);
              }
              else {
                this.isCheckIn = false;
                this.sharedService.displaySuccessMessage(res.msg);
                const result = await this.displayCheckOutSuccessMessage("CheckOut Update", res.msg);

              }


            }).catch((e) => {
              this.sharedService.displayErrorMessage("Issue Happend While CheckedOut");
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

  }

  findDashboard() {
    this.router.navigate(["/dashboard"]);
    if
      (this.name == 'Pooja') {
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
  hyperlinkDocumentCenter() {
    const url = environment.fold;
    window.open(url, '_blank');
  }

  openLink(type: any) {
    if (type == 'branch details') {
      const url = environment.branch_details;
      window.open(url, '_blank');
    }
    else if (type == 'branch performance') {
      const url = environment.branch_performance;
      window.open(url, '_blank');
    }
    else if (type == 'payroll') {
      const url = environment.payroll;
      window.open(url, '_blank');
    }

    else if (type == 'leave') {
      const url = environment.leave;
      window.open(url, '_blank');
    }
    else if (type == 'info') {
      const url = environment.info;
      window.open(url, '_blank');
    }

    else if (type == 'performance') {
      const url = environment.performance;
      window.open(url, '_blank');
    }
    else if (type == 'reimbursement') {
      const url = environment.reimbursement;
      window.open(url, '_blank');
    }

    else if (type == 'travel') {
      const url = environment.travel;
      window.open(url, '_blank');
    }
    else if (type == 'ourJourney') {
      const url = environment.ourJourney;
      window.open(url, '_blank');
    }
    else if (type == 'learningDev') {
      const url = environment.learningDev;
      window.open(url, '_blank');
    }
    else if (type == 'rewardRec') {
      const url = environment.rewardRec;
      window.open(url, '_blank');
    }
  }





  async checkDayCheckIn(): Promise<boolean> {
    const res = await this.authService.getUser();
    if (res.dayCheckIn == true) {
      this.sharedService.displayInfoMessage("You have already checkedIn For the Day");
      this.isDaycheckIn = true;
      return false;
    }
    return true;
  }
  displayLeaveInfoMessage(msg: any, leaveData: any): Promise<boolean> {
    let tableContent = `
      <div style="padding: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="border: 1px solid #ddd; padding: 8px;">Employee Id</th>
              <th style="border: 1px solid #ddd; padding: 8px;">Leave Date</th>
            </tr>
          </thead>
          <tbody>
            ${leaveData.map((leave: any) => `
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${leave.employeeId}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${leave.date}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;

    return new Promise<boolean>((resolve) => {
      Swal.fire({
        title: 'Leave Update',
        html: `<p>You have leaves on the below dates, so please go and update.</p>${tableContent}`,
        icon: 'info',
        focusConfirm: false,
        //showCloseButton: true,
        showCancelButton: false,
        // timer: 3000, // Show the message for 3 seconds
        timerProgressBar: true,
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Button clicked, returning true");
          resolve(true);
        }
      });
    });
  }

  displayCheckOutMessage(msg: any): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      Swal.fire({
        title: msg,
        html: `<p>Are you sure you want to early Checkout?</p>`,
        icon: 'info',
        focusConfirm: false,
        //showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        preConfirm: () => {
          return true;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Button clicked, returning true");
          resolve(true);
        }
      });
    });
  }
  displayCheckOutSuccessMessage(tit: any, msg: any): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      Swal.fire({
        title: tit,
        html: `<p>${msg}</p>`,
        icon: 'success',
        focusConfirm: false, 
        //showCloseButton: true,
        //showCancelButton: true,
        timer:2000,
        
      })
    });
  }
  async checkLeaves(): Promise<boolean> {
    try {
      const res = await this.notificationService.checkLeaves(this.authService.getUserName());
      this.leaveData = res;

      if (this.leaveData) {
        // Await the promise from displayLeaveInfoMessage
        const result = await this.displayLeaveInfoMessage("Leave UPDATE", this.leaveData);
        if (result) {
          console.log("Leave info acknowledged.");
          return true;
        }
      }
      return false;
    } catch (e) {
      this.sharedService.displayErrorMessage("Some Error occurred while checking absentData");
      return false;
    }
  }


  async checkExistingRequest(): Promise<boolean> {
    const res = await this.notificationService.checkAnyRequestExistByUser(this.authService.getUserName());
    if (res) {
      this.sharedService.displayInfoMessage("You have already raised checkin request so wait for approval");
      return false;
    }
    return true;
  }

  async performCheckIn(): Promise<void> {
    this.checkInTimee = new Date();
    const deadline = new Date();
    deadline.setHours(9, 45, 0, 0);

    this.isBeforeDeadline = this.checkInTimee < deadline;
    if (this.isBeforeDeadline) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log(latitude + "   " + longitude);

            this.checkIn = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              empId: this.authService.getUserName()
            };

            try {
              const res: any = await this.authService.docheckIn(this.checkIn);
              this.checkIn = res?.user?.checkIn;
              if (res.status == false || res.status == "false") {
                this.sharedService.displayErrorMessage(res.msg);
              } else {
                this.isCheckIn = true;
                console.log(JSON.stringify(res));
                this.sharedService.displaySuccessMessage(res.msg);
              }
            } catch (e) {
              this.sharedService.displayErrorMessage("Issue Happend While CheckIn");
            }
          },
          (error) => {
            console.error('Error getting geolocation:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } else {
      this.sharedService.displayInfoMessage("Your allowed checkin time has over so please submit request to your reporting manager");
      try {
        const res: any = await this.layoutS.getManagerNameByEmployee(this.authService.getUserName().substring(1, this.authService.getUserName().length));
        this.timesheetDialog = true;
        this.timesheet = {};
        if (res) {
          var approverName = res?.supervisors[0]?.supervisorId;
          this.timesheet.approvername = approverName;
          this.timesheet.username = this.authService.getUserName();
        }
      } catch (e: any) {
        this.sharedService.displayErrorMessage("Error occured while fetching Reporting Manager");
      }
    }
  }

}


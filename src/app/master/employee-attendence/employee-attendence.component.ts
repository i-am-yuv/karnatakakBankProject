import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Employee } from './employee';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { Calendar } from 'primeng/calendar';
import { Table } from 'primeng/table';
import { EmployeeAttendenceService } from './employee-attendence.service';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-employee-attendence',
  templateUrl: './employee-attendence.component.html',
  styleUrls: ['./employee-attendence.component.scss']
})
export class EmployeeAttendenceComponent implements OnInit {
  users!: Employee[];
  selectedDate: Date = new Date(); 
  @ViewChild('dt') dt!: Table;
  date1: Date | undefined;
  uploadUrl = '324324'; // demo URL
  isTabletView: boolean = false;
  cols!: any[];
  showCalendar = false;
  date!: Date;

  constructor(private sharedServiceService:SharedServiceService,private employeeAttendenceService: EmployeeAttendenceService, private cdr: ChangeDetectorRef, private messageService: MessageService, private router: Router, private layoutService: LayoutService) {

  }
  ngOnInit() {
    this.employeeAttendenceService.getAllEmployees().then((res) => {
      this.users = res;
    });
    this.layoutService.getData('employee-attendence');
    this.cols = [
      { field: 'userName', header: 'userName' },
      { field: 'employeeId', header: 'employeeId' },
      { field: 'status', header: 'status' },
      { field: 'role', header: 'role' },
    ];






    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }
  // code for left pannel removal for less than tablet view
  checkScreenSize() {
    this.isTabletView = window.matchMedia('(max-width: 767px)').matches;
  }
  viewReport(fileName: any) {
    this.router.navigate(['/home/report-view/', encodeURIComponent(fileName)]);

  }
  // applyFilterGlobal($event: any, stringVal: any) {
  //   var searchString = ($event.target as HTMLInputElement).value;

  //   // this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  //   if (searchString.length > 0) {
  //     //this.search = searchString;
  //     //this.getFilter(searchString);
  //   }
  //   else {
  //     //this.getFilter(searchString);
  //   }
  // }
  applyFilterGlobal(event: Event, stringVal: any) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  editUser(employee: Employee) {

  }
  presentButtonColor: string = '#B0B0B0';
  presentButtonTextColor: string = '#FFFFFF';
  presentButtonDisabled: boolean = false;

  absentButtonColor: string = '#6D6D6D';
  absentButtonTextColor: string = '#FFFFFF';
  absentButtonDisabled: boolean = false;

  presentData(status: any, employee: Employee) {
    if (status === 'present') {
      employee.isPresent = true;
      employee.isAbsent = false;
      employee.present = true;
      employee.absent = false;
      this.users[this.findIndexById(employee.id)] = employee;


    } else if (status === 'absent') {
      employee.isAbsent = true;
      employee.isPresent = false;
      employee.absent = true;
      employee.present = false;

      this.users[this.findIndexById(employee.id)] = employee;

    }
    //this.cdr.detectChanges();
  }


  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  finalEmployees: Employee[] = [];
  finalSweeperAttendenceSubmit() {
    this.users.forEach((element: Employee) => {
      //alert(element.isAbsent+"   "+ element.isPresent);
      if (element.isAbsent != undefined || element.isPresent != undefined) {
        this.finalEmployees.push(element);
      }

    });


    //calling final api to submit attendence for sweepers
    this.employeeAttendenceService.submitAttendence(this.finalEmployees).then((res) => {
      this.employeeAttendenceService.getAllEmployees().then((res) => {
        this.users = res;
      });

      this.sharedServiceService.displaySuccessMessage("SuccessFully Marked Attendence")
      // this.messageService.add({
      //   severity: 'success',
      //   summary: 'Successful',
      //   detail: 'SuccessFully Marked Attendence'
      // })


      
    });;
  }
}

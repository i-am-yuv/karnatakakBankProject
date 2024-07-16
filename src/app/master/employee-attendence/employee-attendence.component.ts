import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Employee } from './employee';
import { LayoutService } from 'src/app/shared/layout/layout.service';

@Component({
  selector: 'app-employee-attendence',
  templateUrl: './employee-attendence.component.html',
  styleUrls: ['./employee-attendence.component.scss']
})
export class EmployeeAttendenceComponent implements OnInit {

  users!: Employee[];

  date1: Date | undefined;
  uploadUrl = '324324'; // demo URL
  isTabletView: boolean = false;

  constructor(private messageService: MessageService,private router:Router,private layoutService:LayoutService) { }

  ngOnInit() {
    
    this.layoutService.getData('employee-attendence');
    this.users = [
      { userName: "Ramesh", employeeId: "123334242342", status: "active", role: "employee" },
      { userName: "Suresh", employeeId: "123334242343", status: "active", role: "admin" },
      { userName: "Mahesh", employeeId: "123334242344", status: "inactive", role: "employee" },
      { userName: "Rajesh", employeeId: "123334242345", status: "active", role: "admin" },
      { userName: "Naresh", employeeId: "123334242346", status: "active", role: "admin" },
      { userName: "Harish", employeeId: "123334242347", status: "inactive", role: "admin" },
      { userName: "Ganesh", employeeId: "123334242348", status: "active", role: "employee" },
      { userName: "Dinesh", employeeId: "123334242349", status: "active", role: "admin" },
      { userName: "Kiran", employeeId: "123334242350", status: "inactive", role: "employee" },
      { userName: "Mohan", employeeId: "123334242351", status: "active", role: "admin" },
      { userName: "Ashok", employeeId: "123334242352", status: "active", role: "employee" },
      { userName: "Vinod", employeeId: "123334242353", status: "inactive", role: "admin" },
      { userName: "Prakash", employeeId: "123334242354", status: "active", role: "employee" },
      { userName: "Ravi", employeeId: "123334242355", status: "active", role: "admin" },
      { userName: "Karthik", employeeId: "123334242356", status: "inactive", role: "admin" },
      { userName: "Surya", employeeId: "123334242357", status: "active", role: "admin" },
      { userName: "Shiva", employeeId: "123334242358", status: "active", role: "admin" },
      { userName: "Raju", employeeId: "123334242359", status: "inactive", role: "admin" },
      { userName: "Vikas", employeeId: "123334242360", status: "active", role: "employee" },
      { userName: "Vijay", employeeId: "123334242361", status: "active", role: "admin" },
      { userName: "Rahul", employeeId: "123334242362", status: "inactive", role: "admin" },
      { userName: "Ajay", employeeId: "123334242363", status: "active", role: "admin" },
      { userName: "Arun", employeeId: "123334242364", status: "active", role: "admin" },
      { userName: "Abhishek", employeeId: "123334242365", status: "inactive", role: "admin" },
      { userName: "Anil", employeeId: "123334242366", status: "active", role: "admin" },
      { userName: "Amit", employeeId: "123334242367", status: "active", role: "employee" },
      { userName: "Suman", employeeId: "123334242368", status: "inactive", role: "admin" },
      { userName: "Naveen", employeeId: "123334242369", status: "active", role: "employee" },
      { userName: "Manoj", employeeId: "123334242370", status: "active", role: "admin" },
      { userName: "Bharath", employeeId: "123334242371", status: "inactive", role: "admin" },
      { userName: "Deepak", employeeId: "123334242372", status: "active", role: "admin" },
      { userName: "Pavan", employeeId: "123334242373", status: "active", role: "admin" },
      { userName: "Satish", employeeId: "123334242374", status: "inactive", role: "admin" },
      { userName: "Rakesh", employeeId: "123334242375", status: "active", role: "employee" },
      { userName: "Lokesh", employeeId: "123334242376", status: "active", role: "admin" },
      { userName: "Balaji", employeeId: "123334242377", status: "inactive", role: "admin" },
      { userName: "Sunil", employeeId: "123334242378", status: "active", role: "employee" },
      { userName: "Vishal", employeeId: "123334242379", status: "active", role: "admin" },
      { userName: "Tarun", employeeId: "123334242380", status: "inactive", role: "employee" },
      { userName: "Yogesh", employeeId: "123334242381", status: "active", role: "admin" },
      { userName: "Srinivas", employeeId: "123334242382", status: "active", role: "admin" },
      { userName: "Bhaskar", employeeId: "123334242383", status: "inactive", role: "admin" },
      { userName: "Rajiv", employeeId: "123334242384", status: "active", role: "employee" },
      { userName: "Sathish", employeeId: "123334242385", status: "active", role: "admin" },
      { userName: "Madhav", employeeId: "123334242386", status: "inactive", role: "employee" }
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
  viewReport(fileName:any){
    this.router.navigate(['/home/report-view/', encodeURIComponent(fileName)]);

  }
  applyFilterGlobal($event: any, stringVal: any) {
    // this.sortField = this.store.storeName;
    var searchString = ($event.target as HTMLInputElement).value;

    // this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
    if (searchString.length > 0) {
      //this.search = searchString;
      //this.getFilter(searchString);
    }
    else {
      //this.getFilter(searchString);
    }
  }
  editUser(employee:Employee){
    
  }

}

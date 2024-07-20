import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeLateRequest } from './notification';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { NotificationService } from './notification.service';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

cols!:any;
  employeeLateRequests!:EmployeeLateRequest[];
  selectedEmployeeLateRequests!:any;
  totalRecords!:any;
  constructor(private cdr:ChangeDetectorRef,private notificationService:NotificationService, private messageService: MessageService,private sharedServiceService:SharedServiceService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'username', header: 'User Name' },
      { field: 'approvername', header: 'Approver Name' },
      { field: 'reason', header: 'Reason' },
    ];

  }

  approveRequest(employeeLateRequest:EmployeeLateRequest){
    employeeLateRequest.isApprove=true;
    employeeLateRequest.status="APD";
    this.notificationService.approveRequest(employeeLateRequest).then((res:any)=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Successfully Approved',
        life: 3000,
      });
this.sharedServiceService.callMethod();
      this.notificationService
      .getEmployeeLateRequests(this.pageNo, this.pageSize, this.sortField, this.sortDir)
      .then((data) => {
        this.employeeLateRequests = data.content;
        this.totalRecords = data.totalElements;
      });
    });

  }
  rejectRequest(employeeLateRequest:EmployeeLateRequest){
    employeeLateRequest.isReject=true;
    employeeLateRequest.status="REJ";
    this.notificationService.rejectRequest(employeeLateRequest).then((res:any)=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Successfully Rejected',
        life: 3000,
      });
      this.sharedServiceService.callMethod();

      this.notificationService
      .getEmployeeLateRequests(this.pageNo, this.pageSize, this.sortField, this.sortDir)
      .then((data) => {
        this.employeeLateRequests = data.content;
        this.totalRecords = data.totalElements;
      });
    });
  }
  
  sortField: string = '';
  search: string = '';
  pageNo: number = 0;
  pageSize: number = 10;
  sortDir: string = 'DESC';
  loadEmployeeRequests(event: LazyLoadEvent) {
    this.pageNo = event.first! / 10;
    this.pageSize = event.rows!;
    if (event.sortField) {
      this.sortField = event.sortField;
    }
    this.sortDir = event.sortOrder! > 0 ? 'ASC' : 'DESC';
    this.notificationService
      .getEmployeeLateRequests(this.pageNo, this.pageSize, this.sortField, this.sortDir)
      .then((data) => {
        this.employeeLateRequests = data.content;
        this.totalRecords = data.totalElements;
      });
  }

}

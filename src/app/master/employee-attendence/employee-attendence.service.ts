import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAttendenceService {
 

  apiurl: string = environment.commonUrl;

  constructor(private http: HttpClient,private authService:AuthService) {}



  getAllEmployees() {
    var url = this.apiurl + 'api/attendance/reporteesBySupervisor/'+encodeURIComponent(this.authService.getUserId());
    return (
      this.http
        .get<any>(url)
        .toPromise()
        // .then(res => <Company>res.data)
        .then((data) => {
          return data;
        })
    );
    
  }
  submitAttendence(finalEmployees:Employee[]) {
    var url = this.apiurl + 'api/attendance/bulk-employee-timesheet-submission/';
    return (
      this.http
        .post<any>(url, finalEmployees)
        .toPromise()
        // .then(res => <Company>res.data)
        .then((data) => {
          return data;
        })
    );
    
  }
}

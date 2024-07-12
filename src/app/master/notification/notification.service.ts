import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeLateRequest } from './notification';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
 
 
  apiurl: string = environment.commonUrl;

  constructor(private http: HttpClient) {}

  getEmployeeLateRequests(pageNo: number, pageSize: number | undefined, sortField: string | undefined, sortDir: string) {
      //console.log(sortField + '\nsdf');
      var url =
      this.apiurl +
      'api/employee-late-request/all?pageNo=' +
      pageNo +
      '&pageSize=' +
      pageSize +
      '&sortField=' +
      sortField +
      '&sortDir=' +
      sortDir;
    // var url = this.apiurl + '/vendors/all';
    return this.http
      .get<any>(url)
      .toPromise()
      .then((data) => {
        return data;
      });

  }

  rejectRequest(employeeLateRequest: EmployeeLateRequest) {
    var url =
    this.apiurl +
    'api/attendance/reject';
    return this.http
    .post<any>(url,employeeLateRequest)
    .toPromise()
    .then((data) => {
      return data;
    });
  }
  async checkLeaves(username: string) {
    var url =
    this.apiurl +
    'api/leave/absencedata/'+encodeURIComponent(username);
    
    const leavedata = await lastValueFrom(this.http.get<any>(url));

    return leavedata;
  }
  approveRequest(employeeLateRequest: EmployeeLateRequest) {
    var url =
    this.apiurl +
    'api/attendance/approve';  
    return this.http
      .post<any>(url,employeeLateRequest)
      .toPromise()
      .then((data) => {
        return data;
      });
  }

  checkAnyRequestExistByUser(empId: string) {
    var url =
    this.apiurl +
    'api/employee-late-request/get/'+encodeURIComponent(empId);  
    return this.http
      .get<any>(url)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
}

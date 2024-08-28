import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckIn } from './checkkIn';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {


 
 



  currentPage !: Observable<any>;

  currentPageData = new Subject<any>();

  constructor(private http: HttpClient) {
    this.currentPage = this.currentPageData.asObservable();
  }

  apiurl: string = environment.commonUrl;

  getIp(): Promise<any> {
    const url = this.apiurl+'api/ip/get-ip/';
  
    return new Promise((resolve, reject) => {
      this.http.get<any>(url).toPromise()
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          console.error('Error fetching IP:', error);
          reject(error); // Propagate the error
        });
    });
  }
  getData(data: any) {
    this.currentPageData.next(data);
  }

  getManagerNameByEmployee(employeeId: any): any {

    var url =
      this.apiurl +
      'api/attendance/managerByEmployee/' + encodeURIComponent(employeeId!);
    return this.http
      .get<any>(url)
      .toPromise()
      .then((data) => {
        return data;

      });


  }

  checkDistance(checkIn: CheckIn) {

    var url =
      this.apiurl +
      'api/attendance/calculate-distance/';
    return this.http
      .post<any>(url, checkIn)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
  checkIp(checkIn: CheckIn) {

    var url =
      this.apiurl +
      'api/attendance/check-ip/';
    return this.http
      .post<any>(url, checkIn)
      .toPromise()
      .then((data) => {
        return data;
      });
  }

  getUrlByName(type: any) {
   
    var url =this.apiurl+'api/links/linkByName/'+encodeURIComponent(type);
    return this.http
    .get<any>(url)
    .toPromise()
    .then((data) => {
      return data;
    });
  }
  getContactUrlByName(urlName: any) {
    var url =this.apiurl+'api/contactinfo/byUrlName/'+encodeURIComponent(urlName);
    return this.http
    .get<any>(url)
    .toPromise()
    .then((data) => {
      return data;
    });
  }

  getHolidays(userId:any) {
    var url =this.apiurl+'api/holiday/list/'+encodeURIComponent(userId!);
    return this.http
    .get<any>(url)
    .toPromise()
    .then((data) => {
      return data;
    });
  }
}

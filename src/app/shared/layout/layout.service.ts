import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

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




  getData(data :any )
  {
       this.currentPageData.next(data);
  }

  getManagerNameByEmployee(employeeId:any): any {

    var url =
    this.apiurl +
    'api/attendance/managerByEmployee/'+encodeURIComponent(employeeId!);  
    return this.http
      .get<any>(url)
      .toPromise()
      .then((data) => {
          return data;
       
      });
    

  }


}

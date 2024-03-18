import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiurl: string = environment.commonUrl;


  constructor(private http: HttpClient) { }

  async getAllRolesWithoutFilter() {
    var url = this.apiurl + '/roles';
    const allRoles = await lastValueFrom(this.http.get<any>(url));
    return allRoles;
  }

  async todoListItems()
  {
    var customerOnboardingTasks = [
      {
        date: '19 April',
        task: 'Verify Customer Information',
        status: 'Today'
      },
      {
        date: '22 April',
        task: 'Set Up Account Credentials',
        status: 'Pending'
      },
      {
        date: '03 May',
        task: 'Provide Welcome Kit',
        status: 'Pending'
      },
      {
        date: '23 May',
        task: 'Confirm Account Activation',
        status: 'Upcoming'
      },
      {
        date: '28 May',
        task: 'Follow Up on Customer Feedback',
        status: 'Upcoming'
      }
    ];
    
    return customerOnboardingTasks;
  }
  
}

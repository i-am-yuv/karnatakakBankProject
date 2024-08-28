import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Events, RegionalNews } from '../landing/dashboard/RegionalNews';


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

  async todoListItems() {
    // var customerOnboardingTasks = [
    //   {
    //     date: '19 April',
    //     task: 'Verify Customer Information',
    //     status: 'Today'
    //   },
    //   {
    //     date: '22 April',
    //     task: 'Set Up Account Credentials',
    //     status: 'Pending'
    //   },
    //   {
    //     date: '03 May',
    //     task: 'Provide Welcome Kit',
    //     status: 'Pending'
    //   },
    //   {
    //     date: '23 May',
    //     task: 'Confirm Account Activation',
    //     status: 'Upcoming'
    //   },
    //   {
    //     date: '28 May',
    //     task: 'Follow Up on Customer Feedback',
    //     status: 'Upcoming'
    //   }
    // ];

    var url = this.apiurl + 'todos';
    const todoList = await lastValueFrom(this.http.get<any>(url));

    return todoList;
  }

  async getGoldRateByCity(city: any) {
    var url = this.apiurl + 'api/goldrate/today-gold-rate';
    const goldRate = await lastValueFrom(this.http.get<any>(url));
    console.log(JSON.stringify(goldRate));
    return goldRate;
  }

  createNews(regionalNews: RegionalNews) {
    var url = this.apiurl + 'api/news/create';
    return this.http
      .post<any>(url, regionalNews)
      .toPromise()
      .then((data) => {
        return data;
      });

  }
  createEvent(events: Events) {
    var url = this.apiurl + 'api/event/create';
    return this.http
      .post<any>(url, events)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
  async getRegionalNews() {
    var url = this.apiurl + 'api/news/list';
    const news = await lastValueFrom(this.http.get<any>(url));
    return news;
  }

  async getEvents() {
    var url = this.apiurl + 'api/event/list';
    const news = await lastValueFrom(this.http.get<any>(url));
    return news;
  }
  async getKarnatakBankShare(symbol: any) {
    var url = this.apiurl + 'api/stock/' + symbol;
    const shareValue = await lastValueFrom(this.http.get<any>(url));
    return shareValue;
  }

  async getBranchPerformace(region: any) {
    var url = this.apiurl + 'performance';
    const performace = await lastValueFrom(this.http.get<any>(url));
    if (region == 'West') {
      return performace.West;
    }
    else if (region == 'East') {
      return performace.East;
    }
    else if (region == 'South') {
      return performace.South;
    }
    else if (region == 'North') {
      return performace.North;
    }
  }

}

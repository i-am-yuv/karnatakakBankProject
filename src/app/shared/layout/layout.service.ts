import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  currentPage !: Observable<any>;

  currentPageData = new Subject<any>();

  constructor() { 
    this.currentPage = this.currentPageData.asObservable();
  }

  getData(data :any )
  {
       this.currentPageData.next(data);
  }
}

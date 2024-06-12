import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private methodCallSource = new Subject<void>();
  methodCalled$ = this.methodCallSource.asObservable();

  callMethod() {
    this.methodCallSource.next();
  }
}

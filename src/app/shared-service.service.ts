import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private methodCallSource = new Subject<void>();
  methodCalled$ = this.methodCallSource.asObservable();

  callMethod() {
    this.methodCallSource.next();
  }






  displaySuccessMessage(msg: any) {
    return  Swal.fire({
       title: 'Successful',
       text: msg,
       icon: 'success',
      // showCloseButton: true,
       focusConfirm: false,
       timer: 1000,
       timerProgressBar: true,
       customClass: {
         confirmButton: 'custom-confirm-button'
       },
     }).then((result) => {
       if (result.dismiss === Swal.DismissReason.timer) {
         // Optionally handle specific behavior when the alert is closed by timer
       }
     });
 
   }
   displayErrorMessage(msg: any) {
     Swal.fire({
       title: 'Something Went Wrong!',
       html: msg,
       icon: 'error',
       //showCloseButton: true,
       focusConfirm: false,
       timer: 1000,
       timerProgressBar: true,
     }).then((result) => {
       if (result.dismiss === Swal.DismissReason.timer) {
         // Optionally handle specific behavior when the alert is closed by timer
       }
     });;
 
   }
 
   displayInfoMessage(msg: any) {
     Swal.fire({
       title: 'Information',
       text: msg,
       icon: 'info',
       //showCloseButton: true,
       focusConfirm: false,
       timer: 1000,
       timerProgressBar: true,
     }).then((result) => {
       if (result.dismiss === Swal.DismissReason.timer) {
         // Optionally handle specific behavior when the alert is closed by timer
       }
     });;
 
 
   }
}

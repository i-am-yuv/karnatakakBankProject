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

// displaySuccessMessage(msg: string) {
//   return Swal.fire({
//     title: 'Successful',
//     text: msg,
//     icon: 'success',
//     showConfirmButton: true,
//     confirmButtonText: 'GO TO NEXT APPROVAL',
//     confirmButtonColor: '#28a745',
//     customClass: {
//       popup: 'custom-swal-popup',
//       title: 'custom-swal-title',
//       confirmButton: 'custom-confirm-button',
//     },
//     didOpen: () => {
//       const popup = document.querySelector('.custom-swal-popup');
//       if (popup) {
//         popup.setAttribute('style', `
//           border-radius: 15px;
//           padding: 20px;
//           text-align: center;
//         `);
//       }
//       const title = document.querySelector('.custom-swal-title');
//       if (title) {
//         title.setAttribute('style', `
//           font-size: 1.5em;
//           color: #4caf50;
//         `);
//       }
//       const confirmButton = document.querySelector('.custom-confirm-button');
//       if (confirmButton) {
//         confirmButton.setAttribute('style', `
//           background-color: #28a745 !important;
//           color: white !important;
//           border: none !important;
//           border-radius: 5px !important;
//           padding: 10px 20px !important;
//           font-size: 1em !important;
//         `);
//       }
//     }
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // Handle the behavior when the "GO TO NEXT APPROVAL" button is clicked
//     }
//   });
// }


// displaySuccessMessage(msg: string) {
//   return Swal.fire({
//     title: 'Successful',
//     text: msg,
//     icon: 'success',
//     showConfirmButton: true,
//     confirmButtonText: 'GO TO NEXT APPROVAL',
//     confirmButtonColor: '#28a745',
//     customClass: {
//       popup: 'custom-swal-popup',
//       title: 'custom-swal-title',
//       confirmButton: 'custom-confirm-button',
//     },
//     willOpen: () => {
//       const popup = document.querySelector('.custom-swal-popup') as HTMLElement;
//       if (popup) {
//         popup.style.borderRadius = '15px';
//         popup.style.padding = '20px';
//         popup.style.textAlign = 'center';
//       }
//       const title = document.querySelector('.custom-swal-title') as HTMLElement;
//       if (title) {
//         title.style.fontSize = '1.5em';
//         title.style.color = '#4caf50';
//       }
//       const confirmButton = document.querySelector('.custom-confirm-button') as HTMLElement;
//       if (confirmButton) {
//         confirmButton.style.backgroundColor = '#28a745';
//         confirmButton.style.color = 'white';
//         confirmButton.style.border = 'none';
//         confirmButton.style.borderRadius = '5px';
//         confirmButton.style.padding = '10px 20px';
//         confirmButton.style.fontSize = '1em';
//       }
//     }
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // Handle the behavior when the "GO TO NEXT APPROVAL" button is clicked
//     }
//   });
// }


  displaySuccessMessage(msg: any) {
    return  Swal.fire({
       title: 'Successful',
       html: `<p style="font-size:23px;">${msg}</p>`,
       icon: 'success',
      // showCloseButton: true,
       focusConfirm: false,
       timer: 3000,
       timerProgressBar: true,
       customClass: {
         confirmButton: 'custom-confirm-button'
       }
     }).then((result) => {
       if (result.dismiss === Swal.DismissReason.timer) {
         // Optionally handle specific behavior when the alert is closed by timer
       }
     });
 
   }
   displayErrorMessage(msg: any) {
     Swal.fire({
       title: 'Something Went Wrong!',
       html: `<p style="font-size:23px;">${msg}</p>`,
       
       icon: 'error',
       //showCloseButton: true,
       focusConfirm: false,
       timer: 3000,
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
      // text: msg,
       html: `<p style="font-size:23px;">${msg}</p>`,
       icon: 'info',
       //showCloseButton: true,
       focusConfirm: false,
       timer: 3000,
       timerProgressBar: true,
     }).then((result) => {
       if (result.dismiss === Swal.DismissReason.timer) {
         // Optionally handle specific behavior when the alert is closed by timer
       }
     });;
 
 
   }
}

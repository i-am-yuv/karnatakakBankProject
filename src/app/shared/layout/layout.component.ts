import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  name: any;
  role: any;

  isCheckIn: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getLoginInfo();
  }

  getLoginInfo() {
    this.name = sessionStorage.getItem('loginBy');
    this.role = sessionStorage.getItem('loginRole');

  }

  findDashboard() {
    if (this.name == 'Pooja') {
      this.router.navigate(["/dashboard"]);
    }
    else if (this.name == 'Narayana') {
      this.router.navigate(["/dashboard/branchManager"]);
    }
    else if (this.name == 'Gyana') {
      this.router.navigate(["/dashboard/ceoPortal"]);
    }
  }

  isCompressed: boolean = false;

  togglePanel() {
    this.isCompressed = !this.isCompressed;
  }

  navigateToHome() {
    // Your logic to navigate to the home page
  }

  logout() {
    // Your logic to handle logout
  }

}

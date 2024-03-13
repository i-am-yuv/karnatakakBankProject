import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

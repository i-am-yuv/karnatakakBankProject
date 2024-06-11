import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {
  isMobile!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Change the breakpoint according to your design
  }

  hyperlinkHelpdesk() {
    const url = environment.broms1  ;
    window.open(url, '_blank');
  }
}

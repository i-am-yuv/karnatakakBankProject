import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-business-head',
  templateUrl: './business-head.component.html',
  styleUrls: ['./business-head.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('* => void', [
        animate('0.5s', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ]),
  ]
})
export class BusinessHeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  expandCard() {
    // Add any additional functionality if needed when hovering
  }

  shrinkCard() {
    // Add any additional functionality if needed when unhovering
  }

}

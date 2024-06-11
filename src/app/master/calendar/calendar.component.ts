import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Import dayGrid plugin for basic calendar view
import interactionPlugin from '@fullcalendar/interaction'; // Import interaction plugin for user interactions

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor() { }
  calendarOptions: any;

  ngOnInit() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin], // Register plugins
      initialView: 'dayGridMonth', // Set initial view to month grid
      height: '100vh' // Set calendar height to full viewport height
    };
  }

}

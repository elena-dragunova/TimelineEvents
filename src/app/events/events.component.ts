import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../common/mock-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = EVENTS;

  onClick(event) {
    event.active = !event.active;
  }

  toggleRead(event) {
    event.read = !event.read;
  }

  deleteEvent(event) {
    let ind = EVENTS.indexOf(event);
    EVENTS.splice(ind, 1);
  }

  constructor() { }

  ngOnInit() {
  }


}

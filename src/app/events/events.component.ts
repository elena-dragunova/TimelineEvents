import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../common/mock-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = EVENTS;

  constructor() { }

  ngOnInit() {
  }


}

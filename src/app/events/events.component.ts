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

  sortEvents(select) {

    function compareByType(el1, el2) {
      let a = el1.type;
      let b = el2.type;


      let comparison = 0;
      if (a > b) {
        comparison = 1;
      } else if (a < b) {
        comparison = -1;
      }
      return comparison;
    }

    function compareByDate(elem1, elem2) {
      let c = elem1.date;
      let d = elem2.date;


      let comparison = 0;
      if (c > d) {
        comparison = 1;
      } else if (c < d) {
        comparison = -1;
      }
      return comparison * -1;
    }

    if (select.value === 'type') {
      this.events = EVENTS.sort(compareByType);
    } else if (select.value === 'date') {
      this.events = EVENTS.sort(compareByDate);
    } else {
      console.log("Something went wrong...")
    }
  }

  constructor() { }

  ngOnInit() {
  }


}

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

  log(select) {
    //let sorting = select.viewMode;

    function compareByType(a,b) {
      let a = a.type;
      let b = b.type;


      let comparison = 0;
      if (a > b) {
        comparison = 1;
      } else if (a < b) {
        comparison = -1;
      }
      return comparison;
    }

    function compareByDate(a, b) {
      let a = a.date;
      let b = b.date;


      let comparison = 0;
      if (a > b) {
        comparison = 1;
      } else if (a < b) {
        comparison = -1;
      }
      return comparison * -1;
    }

    if (select.viewModel === 'type') {
      this.events = EVENTS.sort(compareByType);
    } else if (select.viewModel === 'date') {
      this.events = EVENTS.sort(compareByDate);
    } else {
      console.log("Something went wrong...")
    }
  }

  constructor() { }

  ngOnInit() {
  }


}

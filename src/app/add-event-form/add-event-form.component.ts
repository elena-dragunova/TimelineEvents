import { Component, OnInit } from '@angular/core';
import { EVENTS } from '../common/mock-events';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {

  addingType: string;

  selectEventType(select) {
    this.addingType = select.value;
  }

  submitNews(form) {
    let controls = form.controls;
    let title = controls.newsTitle.value;
    let content = controls.newsContent.value;
    let date = new Date();
    let formatedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    let newNews = {
      type: 'news',
      date: formatedDate,
      title: title,
      content: content,
      read: false
    };
    EVENTS.push(newNews);
  };

  submitTransaction(form) {
    let controls = form.controls;
    let flow = controls.selectFlow.value;
    let currency = controls.selectCurrency.value;
    let sum = controls.sum.value;
    let person = controls.person.value;
    let description = controls.description.value;
    let date = new Date();
    let formatedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    let newTransaction = {
      type: 'transaction',
      date: formatedDate,
      sum: sum,
      currency: currency,
      flow: flow,
      person: person,
      description: description
    };
    EVENTS.push(newTransaction);
  };


  constructor() { }

  ngOnInit() {
  }

}

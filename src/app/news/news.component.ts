import { Component, OnInit } from '@angular/core';
import {NEWS} from "../common/mock-news";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news = NEWS;

  constructor() { }

  ngOnInit() {
  }

}
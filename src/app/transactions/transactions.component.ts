import { Component, OnInit } from '@angular/core';
import {TRANSACTIONS} from "../common/mock-transactions";


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions = TRANSACTIONS;

  constructor() { }

  ngOnInit() {
  }

}

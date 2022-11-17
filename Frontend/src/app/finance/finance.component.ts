import { Component, OnInit } from '@angular/core';
import { faUser,faSignOut,faMoneyBills,faReceipt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  p: number = 1;
  collection = [1]; 
  faUser=faUser;
  logout=faSignOut;
  statement=faMoneyBills;
  report=faReceipt
}

import { Component, OnInit } from '@angular/core';
import { faAdd} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  p: number = 1;
  collection: any[] = [1]; 
  close:boolean = false;
faAdd=faAdd;
  showAdd(){


    this.close=!this.close;
  }

 

}

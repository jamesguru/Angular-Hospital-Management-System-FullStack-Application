import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  p: number = 1;
  collection: any[] = [1];
  close: boolean = false;
  faAdd = faAdd;

  showAdd() {

    console.log('hellooooo')
    this.close = !this.close;
  }

  setAvailability(){

    
  }
}

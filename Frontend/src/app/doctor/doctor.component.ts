import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  constructor() {}

  form!:FormGroup;
  ngOnInit(): void {

    this.form = new FormGroup({
      available: new FormControl('available'),
    });
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

    console.log(this.form.value)
  }
}

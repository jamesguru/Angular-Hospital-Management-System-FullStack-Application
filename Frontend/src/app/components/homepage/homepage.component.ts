import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  login: boolean = false;

  constructor() {}

  ngOnInit(): void {


    setTimeout(()=>{

      this.login=true;
    },4000)
  }

  showLogin(condition: string) {
    if (condition === 'open') {
      this.login = true;
    } else {
      this.login = false;
    }
  }
}

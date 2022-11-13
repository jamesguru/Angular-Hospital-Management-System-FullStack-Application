import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  login: boolean = false;

  constructor(private router:Router) {}

  ngOnInit(): void {


    setTimeout(()=>{

      this.login=true;
    },20000)
  }

  showLogin(condition: string) {
    if (condition === 'open') {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  helpRegister(){

    this.router.navigate(['help/register'])
  }
}

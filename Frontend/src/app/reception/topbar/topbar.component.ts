import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  faUser=faUser;

  Logout(){

    this.router.navigate(['/']);
  }
}

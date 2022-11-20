import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome,faUser,faUserDoctor,faAdd,faDotCircle,faSignOut } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
faHome = faHome;
faUser = faUser;
faUserDoctor=faUserDoctor;
faAdd=faAdd;
faDot=faDotCircle;
logout=faSignOut

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  
  LogOut(){

    localStorage.clear();
    this.router.navigate(['/']);
    

  }
}

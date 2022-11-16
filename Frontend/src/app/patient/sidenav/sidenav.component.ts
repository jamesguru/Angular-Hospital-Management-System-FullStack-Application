import { Component, OnInit } from '@angular/core';
import { faHome,faUser,faUserDoctor,faAdd,faDotCircle,faSignOut,faHospital,faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faHome = faHome;
  faUser = faUser;
  faUserDoctor=faUserDoctor;
  faAdd=faAdd;
  faDot=faDotCircle;
  logout=faSignOut;
  hospital=faHospital;
  faBars=faBars;
  closemenu=true;

  closeMenu(){

    this.closemenu=!this.closemenu;
  }
}

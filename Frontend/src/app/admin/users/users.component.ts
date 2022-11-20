import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService:AuthService) { }

  users$!:Observable<RegisterUser[]>;

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers(){
    this.users$=this.authService.getUsers();
  }

}

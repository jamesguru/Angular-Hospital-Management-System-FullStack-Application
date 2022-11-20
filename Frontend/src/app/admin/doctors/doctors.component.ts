import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Observable} from 'rxjs';
import { RegisterUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private authService:AuthService) { }
  users$!:Observable<RegisterUser[]>;
  ngOnInit(): void {

    this.getUsers();
  }
  p: number = 1;
  collection: any[] = [1];
  close: boolean = false;
  faAdd = faAdd;
  id!:any;

  showAdd(id:any) {

    this.id=id;
    console.log('hellooooo')
    this.close = !this.close;
  }

  getUsers(){
    this.users$=this.authService.getUsers();
  }
  setAvailability(){

    
  }

  deleteUser(){

    this.authService.deleteUser(this.id).subscribe((value) =>{

      console.log(value)
    })

    this.close=!this.close;
    window.location.reload();
  }
}

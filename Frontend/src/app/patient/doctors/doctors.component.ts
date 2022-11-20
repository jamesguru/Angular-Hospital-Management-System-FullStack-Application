import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {


  constructor(private authService:AuthService,private appointmentService:AppointmentService) { }
  p: number = 1;
  date:string='hello';
  doctor_email!:string;
  collection = [1]; 
  doctors$!:Observable<RegisterUser[]>;
showbook:boolean=false;
  ngOnInit(): void {

    this.getDoctors();
    console.log(this.date);
  }


showBook(email:string){

  
  this.doctor_email=email;
  this.showbook=!this.showbook;
}
Book(){
  const user = JSON.parse(localStorage.getItem('user') as string);
  const patient_name=user.name;
  const patient_email=user.email; 

  this.showbook=!this.showbook;

  this.appointmentService.AddPointment(patient_name,this.doctor_email,this.date,patient_email).subscribe((value)=>{

    console.log(value)
  })
  
}
getDoctors(){

  this.doctors$=this.authService.getDoctors();
}
Close(){
  this.showbook=!this.showbook;
  window.location.reload();
}
}

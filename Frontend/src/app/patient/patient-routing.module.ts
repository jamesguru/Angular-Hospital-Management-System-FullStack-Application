import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from '../doctor/doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  
  { path: '', 
  component: PatientComponent,
  children:[
    { path:'',component:HomeComponent},
    {path:'doctors',component:DoctorsComponent}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }

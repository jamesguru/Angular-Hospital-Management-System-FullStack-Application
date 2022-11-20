import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientComponent,
    SidenavComponent,
    DoctorsComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ChartModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class PatientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule,MatSlider } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@NgModule({
  declarations: [
    DoctorComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSlideToggleModule
    
  ]
})
export class DoctorModule { }

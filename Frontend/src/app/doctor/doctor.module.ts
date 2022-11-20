import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule,MatSlider } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    DoctorComponent,
    TopbarComponent,
    SearchPipe
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class DoctorModule { }

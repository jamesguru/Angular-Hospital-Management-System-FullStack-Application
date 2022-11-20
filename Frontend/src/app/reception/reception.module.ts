import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    ReceptionComponent,
    TopbarComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReceptionModule { }

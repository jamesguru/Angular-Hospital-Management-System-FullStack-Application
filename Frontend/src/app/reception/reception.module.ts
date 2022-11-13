import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ReceptionComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule
  ]
})
export class ReceptionModule { }

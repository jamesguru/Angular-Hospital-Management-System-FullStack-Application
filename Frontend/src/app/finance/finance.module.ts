import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FinanceComponent,
 
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule
  ]
})
export class FinanceModule { }

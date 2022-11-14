import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    
    HomeComponent,
    DoctorsComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }

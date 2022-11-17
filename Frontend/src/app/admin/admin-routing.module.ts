import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from '../doctor/doctor.component';
import { AddUserComponent } from './add-user/add-user.component';

import { AdminComponent } from './admin.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'doctors',
        component: DoctorsComponent,
      },

      {
        path: 'adduser',
        component: AddUserComponent,
      },

     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

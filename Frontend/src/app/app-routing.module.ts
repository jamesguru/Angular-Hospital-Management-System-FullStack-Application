import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'help/register',component:ResetComponent},
  { path: 'reception', loadChildren: () => import('./reception/reception.module').then(m => m.ReceptionModule) },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

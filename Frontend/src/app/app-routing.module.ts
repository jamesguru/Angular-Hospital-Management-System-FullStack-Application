import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'help/register',component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

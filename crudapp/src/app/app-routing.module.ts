import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { Page1Component } from './page1/page1.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:"full"},
  {path:'registration',component:RegistrationComponent},
  {path:'page',component:PageComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

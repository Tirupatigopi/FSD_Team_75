import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './adminprofileedit/profile.component';
import { AdmpageComponent } from './admpage/admpage.component';
import { BookingComponent } from './booking/booking.component';
import { CaradminComponent } from './caradmin/caradmin.component';
import { CompanyComponent } from './company/company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { EditcarComponent } from './editcar/editcar.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RegistrationComponent } from './registration/registration.component';
import { Registration2Component } from './registration2/registration2.component';
import { SuperComponent } from './super/super.component';
import { SuperbookingComponent } from './superbooking/superbooking.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'page',component:PageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'page1',component:Page1Component},
  {path:'company',component:CompanyComponent},
  {path:'details',component:DetailsComponent},
  {path:'edit',component:EditComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'user',component:UserComponent},
  {path:'registration2',component:Registration2Component},
  {path:'booking',component:BookingComponent},
  {path:'editcar',component:EditcarComponent},
  {path:'admpage',component:AdmpageComponent},
  {path:'adminprofileedit',component:ProfileComponent},
  {path:'caradmin',component:CaradminComponent},
  {path:'page2',component:Page2Component},
  {path:'super',component:SuperComponent},
  {path:'superbooking',component:SuperbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

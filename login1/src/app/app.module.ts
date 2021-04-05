import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import{CarComponent}from './car/car.component';
import{EditComponent}from './edit/edit.component'
import {BookingComponent}from './booking/booking.component'
import{DashboardComponent}from './dashboard/dashboard.component'
import{ProfileComponent}from './adminprofileedit/profile.component';
import {PageComponent}from './page/page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

import {Page1Component}from './page1/page1.component'
import {Page2Component}from './page2/page2.component'
import {RegistrationComponent}from './registration/registration.component'
import {Registration2Component}from './registration2/registration2.component'
import{SuperComponent}from './super/super.component';
import{UserComponent}from './user/user.component';
import { SuperbookingComponent } from './superbooking/superbooking.component';
import { DetailsComponent } from './details/details.component';
import { CompanyComponent } from './company/company.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AdmpageComponent } from './admpage/admpage.component';
import { EditcarComponent } from './editcar/editcar.component';
import { CaradminComponent } from './caradmin/caradmin.component';
@NgModule({
  declarations: [
    AppComponent,BookingComponent,DashboardComponent,EditComponent,Page1Component,RegistrationComponent,
    LoginComponent,CarComponent,ProfileComponent,PageComponent,Page2Component,Registration2Component,
    UserComponent,SuperComponent, SuperbookingComponent, DetailsComponent, CompanyComponent, UserprofileComponent, AdmpageComponent, EditcarComponent, CaradminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,MatPaginatorModule,MatSelectModule,
    MatButtonModule,
    MatCardModule,HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

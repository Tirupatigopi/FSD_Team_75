import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupDetails } from 'signup';
import { AllService } from '../all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  private signup=new SignupDetails("","",233,"","",345);
  constructor(private service:AllService,private router:Router) { }
message:any;
  ngOnInit(){
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)])
    }
    );
  }
    public handlesignup(){
        this.service.dosignup(this.signup).subscribe(data=>this.message=data)
    }
   onLOgin(){

   }
   donavigate(){
        this.router.navigate(['page']);
  }
}

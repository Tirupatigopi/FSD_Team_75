import { Component, OnInit } from '@angular/core';

import { SignupDetails } from 'signup';
import { AllService } from '../all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private signup=new SignupDetails("","",233,"","",345);
  constructor(private service:AllService) { }
message:any;
  ngOnInit(): void {
  }
    public handlesignup(){
        this.service.dosignup(this.signup).subscribe(data=>this.message=data)
    }
}

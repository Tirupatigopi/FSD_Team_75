import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {

  registrationForm!: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobilenumber:['',[Validators.required]],
      admin:['',[Validators.required]],
      sellername:['',[Validators.required]],
      companyname:['',[Validators.required]],
      companyimageurl:['',[Validators.required]],
      companyaddress:['',[Validators.required]]
    }
    );
  }

}

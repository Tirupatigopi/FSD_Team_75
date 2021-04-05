import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm! : FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobilenumber:['',[Validators.required]],
      user:['',[Validators.required]],
      username:['',[Validators.required]],
      age:['',[Validators.required]]
    }
    );
  }
}

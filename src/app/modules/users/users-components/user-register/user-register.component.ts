import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {


  //Form Group:
  userRegisterForm:FormGroup = new FormGroup({});
  isRegistered:boolean = false;

  constructor(private formBuilder:FormBuilder,private fService:FlightServiceService) { }

  ngOnInit(): void {
    this.initializeRegForm();
  }

  initializeRegForm(){
    this.userRegisterForm = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      age: new FormControl(),
      emailId:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    });
  }

  //Register New User
  registerNewUser(){
    this.fService.registerNewUser(this.userRegisterForm.value).subscribe(data=>{
      this.isRegistered = true;
      this.userRegisterForm.reset();
    })
  }

}

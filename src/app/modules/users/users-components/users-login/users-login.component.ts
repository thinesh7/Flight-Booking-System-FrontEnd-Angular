import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent implements OnInit {

  //Form Grroup:
  loginFormGroup: FormGroup = new FormGroup({});
  //Login Check:
  isLoginFail: boolean = false;

  //Controlls:
  emailid = new FormControl("thinesh@gmail.com", [Validators.required, Validators.pattern("([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z]{2,4})")]);
  pswd = new FormControl("thinesh", Validators.required);

  constructor(private formBuilder: FormBuilder, private router: Router, private fservice: FlightServiceService) { }

  ngOnInit(): void {
    this.initializationFromBuilder();
  }

  //All Method:
  initializationFromBuilder() {
    this.loginFormGroup = this.formBuilder.group({
      emailId: this.emailid,
      password: this.pswd
    });
  }

  loginDetails: any;

  login() {
    this.getUsersLoginDetails();
  }

  getUsersLoginDetails() {
    // Send data to server and validation login details:
    this.fservice.getUsersLoginDetail().subscribe(data => {
      this.loginDetails = data;
      this.ValidateLoginDetails();
    });
  }

  ValidateLoginDetails() {
    for (let loginDetail of this.loginDetails) {
      if ((this.loginFormGroup.value.emailId == loginDetail.emailId) && (this.loginFormGroup.value.password == loginDetail.password)) {
        localStorage.setItem("isUserValid", "true");
        this.forwardRequestToNextPage();
      }
    }

    if(!localStorage.getItem("isUserValid")){
      this.isLoginFail = true;
    }
  }

  forwardRequestToNextPage() {
    this.router.navigate(["/dashboard/searchFlight"]);
  }

  signUp() {
    this.router.navigate(['users/users-signup']);
  }

}

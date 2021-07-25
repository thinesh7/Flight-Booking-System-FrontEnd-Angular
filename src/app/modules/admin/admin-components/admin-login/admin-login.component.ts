import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  //Form Grroup:
  loginFormGroup: FormGroup = new FormGroup({});
  //Login Check:
  isLoginFail:boolean = false;

  //Controlls:
  emailid = new FormControl("Thines@cts.com",[Validators.required, Validators.pattern("([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z]{2,4})")]);
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
    this.doGeLoginDetails();
  }

  doGeLoginDetails() {
    // Send data to server and validation login details:
      this.fservice.getLoginDetail().subscribe(data => {
      this.loginDetails = data;
      this.ValidateLoginDetails();
      
    });
  }

  ValidateLoginDetails() {
    if ((this.loginFormGroup.value.emailId == this.loginDetails[0].email) && (this.loginFormGroup.value.password == this.loginDetails[0].password)) {
      localStorage.setItem("isValid", "true");
      this.forwardRequestToNextPage();
    }else{
      this.isLoginFail = true;
    }
  }

  forwardRequestToNextPage() {
    this.router.navigate(["admin/dashboard/add-airline"]);
  }
}

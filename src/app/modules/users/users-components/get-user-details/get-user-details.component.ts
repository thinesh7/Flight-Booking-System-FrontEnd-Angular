import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

  //Form Group:
  getDetailsForm: FormGroup = new FormGroup({});
  returnDate = localStorage.getItem("rDate");

  constructor(private formBulider: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.getDetailsForm = this.formBulider.group({
      name: new FormControl(),
      email: new FormControl(),
      numberOfPassenger: new FormControl(),
      passengersList: this.formBulider.array([
        this.formBulider.group({
          pName: new FormControl(),
          pGender: new FormControl(),
          age: new FormControl(),
          onwardSeat: new FormControl(),
          returnSeat: new FormControl(),
          optMeal: new FormControl()
        })
      ]),
      discount: new FormControl()
    });
  }

  //Get Passenger Array List:
  getPassenegrArray(): FormArray {
    return this.getDetailsForm.get('passengersList') as FormArray;
  }

  //Add Passenger:

  addPassenger(){
    this.getPassenegrArray();
  }

  //Remove Passenger:


  submitForm() {
    console.log("csdc");
    console.log(this.getDetailsForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/service/flight-service.service';
import { Ticket } from 'src/app/service/ticket';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

  //Form Group:
  getDetailsForm: FormGroup = new FormGroup({});
  returnDate = this.tService.searchDetails.returnDate;
  billingAmount = this.tService.searchBillAmount;

  constructor(private formBulider: FormBuilder, private router: Router, 
    private fservice: FlightServiceService, private tService:Ticket) {
   }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.getDetailsForm = this.formBulider.group({
      name: new FormControl('Thinesh'),
      email: new FormControl('demo@demo.com'),
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
      discount: new FormControl(''),
      billingAmmount: new FormControl(0),
      onwardFlightID:new FormControl(this.tService.selectedFlightDetailsOnward.flightId),
      roundFlightId:new FormControl(this.tService.selectedFlightDetailsRound?.flightId),
      onwardSource:new FormControl(this.tService.searchDetails.sourcePlace),
      onwardDepature:new FormControl(this.tService.searchDetails.destinationPlace),
      roundSource:new FormControl(this.tService.searchDetails.destinationPlace),
      roundDepature:new FormControl(this.tService.searchDetails.sourcePlace),
      onwardBoardingTime:new FormControl(this.tService.selectedFlightDetailsOnward.time),
      returnBoardingTime:new FormControl(this.tService.selectedFlightDetailsRound?.time),
      tripType:new FormControl(this.tService.searchDetails.tripType)
    });
  }

  //Get Passenger Array List:
  getPassenegrArray(): FormArray {
    return this.getDetailsForm.get('passengersList') as FormArray;
  }

  //Add Passenger:

  addPassenger() {
    let newUser = this.formBulider.group({
      pName: '',
      pGender: '',
      age: '',
      onwardSeat: '',
      returnSeat: '',
      optMeal: ''
    });

    this.getPassenegrArray().push(newUser);
  }

  //Remove Passenger:
  removePassenger(i: any) {
    this.getPassenegrArray().removeAt(i);
  }

  showCalculate: boolean = false;
  //Calculate Price:
  calculatePrice() {
    let totalPrice: number;
    let numberOfCustomers = this.getPassenegrArray().length;
    totalPrice = numberOfCustomers * this.billingAmount;

    this.getDetailsForm.get('billingAmmount')?.setValue(totalPrice);
    this.showCalculate = true;
  }

  submitForm() {
    console.log(this.getDetailsForm.value);
    this.tService.ticket = this.getDetailsForm.value;
    this.router.navigate(['dashboard/paymet']);
  }

}

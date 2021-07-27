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
  billingAmount = this.tService.searchBillAmount.totalBillingAmountBeforeIncludingPassenger;
  isDiscountApplied: boolean = false;
  discountValidation: boolean = false;

  constructor(private formBulider: FormBuilder, private router: Router,
    private fservice: FlightServiceService, private tService: Ticket) {
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
          optMeal: new FormControl(),
          pnrNumber: new FormControl()
        })
      ]),
      discount: new FormControl(''),
      billingAmmount: new FormControl(0),
      onwardFlightID: new FormControl(this.tService.selectedFlightDetailsOnward.flightId),
      roundFlightId: new FormControl(this.tService.selectedFlightDetailsRound?.flightId),
      onwardSource: new FormControl(this.tService.searchDetails.sourcePlace),
      onwardDepature: new FormControl(this.tService.searchDetails.destinationPlace),
      roundSource: new FormControl(this.tService.searchDetails.destinationPlace),
      roundDepature: new FormControl(this.tService.searchDetails.sourcePlace),
      onwardBoardingTime: new FormControl(this.tService.selectedFlightDetailsOnward.time),
      returnBoardingTime: new FormControl(this.tService.selectedFlightDetailsRound?.time),
      tripType: new FormControl(this.tService.searchDetails.tripType),
      tripOnewayPrice: new FormControl(),
      roundTripPrice: new FormControl(),
      ticketStatus:new FormControl()
    });

    this.editFormGroup();
  }

  editFormGroup() {
    if (this.tService.searchDetails.tripType == 'oneway') {
      this.getDetailsForm.removeControl('roundFlightId');
      this.getDetailsForm.removeControl('roundSource');
      this.getDetailsForm.removeControl('roundDepature');
      this.getDetailsForm.removeControl('returnBoardingTime');
      this.getDetailsForm.removeControl('roundTripPrice');
    }
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
      optMeal: '',
      pnrNumber:''
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
    this.getDetailsForm.get('tripOnewayPrice')?.setValue(this.tService.searchBillAmount.tripOnePrice * numberOfCustomers);

    if (!!this.tService.searchBillAmount.tripTwoPrice) {
      this.getDetailsForm.get('roundTripPrice')?.setValue(this.tService.searchBillAmount.tripTwoPrice * numberOfCustomers);
    }
    this.showCalculate = true;
  }

  discoundList: any;
  applyDiscount() {
    this.discountValidation = true;
    this.fservice.getDiscountDetails().subscribe(data => {
      this.discoundList = data;
      var discount = this.getDetailsForm.value.discount;
      this.validateDiscount(discount);
    });

  }
  //Validate It:
  validateDiscount(appliedCode: string) {
    for (let discount of this.discoundList) {
      if (discount.discountCode == appliedCode) {
        this.changePrice(+discount.discountPercentage);
        this.isDiscountApplied = true;
        break;
      }
    }
  }

  //ApplyDiscountPrice:
  changePrice(discountPercent: number) {
    var currentBill: Number = +this.getDetailsForm.value.billingAmmount;
    var disAmount: number = ((+currentBill) * (discountPercent / 100));
    this.getDetailsForm.get('billingAmmount')?.setValue(+currentBill - disAmount);
  }

  submitForm() {
    console.log(this.getDetailsForm.value);
    this.tService.ticket = this.getDetailsForm.value;
    this.router.navigate(['dashboard/paymet']);
  }

}

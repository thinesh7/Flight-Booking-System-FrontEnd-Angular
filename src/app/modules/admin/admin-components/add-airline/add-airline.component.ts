import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.scss']
})
export class AddAirlineComponent implements OnInit {

  // Form Group:
  addAirlineForm: FormGroup = new FormGroup({});

  isAdded:boolean = false;

  constructor(private formBuilder: FormBuilder, private fservice:FlightServiceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.addAirlineForm = this.formBuilder.group({
      //Form Control:
      airlineName: new FormControl("AAA - Airline Pvt Ltd", Validators.required),
      //airlineLogo: new FormControl(Validators.required),
      airLineContactNumber: new FormControl('9876543210', Validators.required),
      airLineContactAddress: new FormControl("Bangalore - 560066", Validators.required)
    });
  }

  //Logics:
  submitAddFlight(){
    this.fservice.addNewFlight(this.addAirlineForm.value).subscribe(data => console.log(data));
    this.isAdded = true;
  }

}

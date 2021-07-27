import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.scss']
})
export class ManageFlightsComponent implements OnInit {

  isAdded: boolean = false;

  //Form Group:
  flightManageForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,private fService:FlightServiceService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.flightManageForm = this.formBuilder.group({
      airlineName: new FormControl ('',Validators.required),
      flightNumber: new FormControl('',Validators.required),
      from: new FormControl('',Validators.required),
      to: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      depatureDate: new FormControl('',Validators.required),
      dTime:new FormControl('',Validators.required),
      arivalDate: new FormControl('',Validators.required),
      aTime: new FormControl('',Validators.required),
      totalSeats: new FormControl(),
    });
  }


  manageFlight() {
    this.fService.scheduleFlight(this.flightManageForm.value).subscribe(data=>{
    this.isAdded = true;
    this.flightManageForm.reset();
    })    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchDetails } from 'src/app/model/search-details.bean';
import { map, startWith } from 'rxjs/operators';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})

export class BookFlightComponent implements OnInit {

  //constructor
  constructor(private formBuilder: FormBuilder, private flightService: FlightServiceService) {
  }

  //Form builder
  flightSearchForm: any;
  //Form Controls:
  tType = new FormControl("", Validators.required);
  sPlace = new FormControl("", Validators.required);
  dPlace = new FormControl("", Validators.required);
  dDate = new FormControl("", Validators.required);
  rDate = new FormControl();

  //DropDown List - List of AirPorts:
  public listOfAirports: string[] = [];


  filterOptions: Observable<string[]> = new Observable<string[]>();

  ngOnInit(): void {
    this.flightSearchForm = this.formBuilder.group({
      tripType: this.tType,
      sourcePlace: this.sPlace,
      destinationPlace: this.dPlace,
      departureDate: this.dDate,
      returnDate: this.rDate
    });

    this.loadAirportList();
  }

  mydata: any = [];

  loadAirportList(): void {
    this.flightService.getAllAirportList().subscribe(data => {
      console.log(data);
      this.mydata = data;
      this.loopIt();
    });
  }

  loopIt() {
    console.log(this.mydata)
    for (let entry of this.mydata) {
      this.listOfAirports.push(entry.name);
    }

    console.log( this.listOfAirports);
  }


  restForm() {
    this.flightSearchForm.reset();
  }

  sendData() {
    let searchDeatils: SearchDetails = this.flightSearchForm.value;
    console.log(searchDeatils);

    //Send this to Server:

    //Redirect to 


  }


}

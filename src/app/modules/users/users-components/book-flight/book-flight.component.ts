import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchDetails } from 'src/app/model/search-details.bean';
import { FlightServiceService } from 'src/app/service/flight-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})

export class BookFlightComponent implements OnInit {

  //constructor
  constructor(private formBuilder: FormBuilder, private flightService: FlightServiceService, private router: Router) {
  }

  //Form builder
  flightSearchForm: FormGroup = new FormGroup({});

  //Form Controls:
  tType = new FormControl("", Validators.required);
  sPlace = new FormControl("", Validators.required);
  dPlace = new FormControl("", Validators.required);
  dDate = new FormControl("", Validators.required);
  rDate = new FormControl();

  //  List of AirPorts For Source Place:
  public listOfAirportsForSourcePlace: string[] = [];
  public listOfFilteredAirportsForSourcePlace: string[] = [];

  // List of AirPorts:
  public listOfAirportsForDestinationPlace: string[] = [];
  public listOfFilteredAirportsForDestinationPlace: string[] = [];

  ngOnInit(): void {
    this.flightSearchForm = this.formBuilder.group({
      tripType: this.tType,
      sourcePlace: this.sPlace,
      destinationPlace: this.dPlace,
      departureDate: this.dDate,
      returnDate: this.rDate
    });

    this.loadAirportListForSource();
    this.autoCompCallForSource();

    this.loadAirportListForDestination();
    this.autoCompCallForDestination();
  }

  myTempData: any = [];

  loadAirportListForSource(): void {
    this.flightService.getAllAirportList().subscribe(data => {
      this.myTempData = data;
      this.loopIt();
    });
  }

  loopIt() {
    for (let entry of this.myTempData) {
      this.listOfAirportsForSourcePlace.push(entry.name);
    }
    this.listOfFilteredAirportsForSourcePlace = this.listOfAirportsForSourcePlace;
  }

  private autoCompCallForSource() {
    this.flightSearchForm.get('sourcePlace')?.valueChanges.subscribe(enteredData => this.filterData(enteredData));
  }

  private filterData(enteredData: string) {
    this.listOfFilteredAirportsForSourcePlace = this.listOfAirportsForSourcePlace.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  myTempData2: any = [];

  //Destination Logic:
  loadAirportListForDestination() {
    this.flightService.getAllAirportList().subscribe(data => {
      this.myTempData2 = data;
      this.loopIt2();
    });
  }

  loopIt2() {
    for (let entry of this.myTempData2) {
      this.listOfAirportsForDestinationPlace.push(entry.name);
    }
    this.listOfFilteredAirportsForDestinationPlace = this.listOfAirportsForDestinationPlace;
  }

  private autoCompCallForDestination() {
    this.flightSearchForm.get('destinationPlace')?.valueChanges.subscribe(enter => { this.filterData2(enter) });
  }

  private filterData2(enter: string) {
    this.listOfFilteredAirportsForDestinationPlace = this.listOfAirportsForDestinationPlace.filter(item => {
      return item.toLowerCase().indexOf(enter.toLowerCase()) > -1;
    })
  }

  restForm() {
    this.flightSearchForm.reset();
  }

  sendData() {
    let searchDeatils: SearchDetails = this.flightSearchForm.value;

    //Send this to Server and get:
    localStorage.setItem("tType", searchDeatils.tripType);
    localStorage.setItem("sPlace", searchDeatils.sourcePlace);
    localStorage.setItem("dPlace", searchDeatils.destinationPlace);
    localStorage.setItem("dDate", searchDeatils.departureDate);
    if (!!searchDeatils.returnDate) {
      localStorage.setItem("rDate", searchDeatils.returnDate);
    }
    //Redirect to 
    this.router.navigate(['dashboard/search-result']);
  }

}

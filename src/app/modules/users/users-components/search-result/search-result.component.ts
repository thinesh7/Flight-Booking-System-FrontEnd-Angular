import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResult } from 'src/app/model/flight-search-result';
import { SearchDetails } from 'src/app/model/search-details.bean';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  //Properties:
  oneWaySR: SearchResult[] = [];
  roundTrip: SearchResult[] = [];
  isRoundTrip: boolean = false;

  constructor(private flightService: FlightServiceService, private router:Router) { }

  //Search Details:
  searchDetails: SearchDetails = new SearchDetails();

  ngOnInit(): void {
    this.loadSearchDetails();
    if (this.searchDetails.tripType == "oneway") {
      this.getSearchResultForOneWayTrip();
    } else {
      this.getSearchResultForOneWayTrip();
      this.getSearchResultForReturnTrip();
      this.isRoundTrip = true;
    }
  }

  //Loading Search Details:
  loadSearchDetails(): void {
    this.searchDetails = {
      tripType: localStorage.getItem("tType") + '',
      sourcePlace: localStorage.getItem("sPlace") + '',
      destinationPlace: localStorage.getItem("dPlace") + '',
      departureDate: localStorage.getItem("dDate") + '',
      returnDate: localStorage.getItem("rDate") + ''
    }
    console.log(this.searchDetails);
  }

  //Do API Calls:

  getSearchResultForOneWayTrip() {
    this.flightService.getSearchResultForOneWay().subscribe(data => {
      this.oneWaySR = data;
    });
  }
  getSearchResultForReturnTrip() {
    this.flightService.getSearchResultForRoundTrip().subscribe(data => {
      this.roundTrip = data; console.log(data);
    });
  }

  // Remaining Logics:

  total1:number = 0;
  total2:number = 0;

  // For Trip-1
  selectedTrip1:SearchResult = new SearchResult();

  flightTrip1Selected(trip1:SearchResult){
    this.selectedTrip1 = trip1;
    this.total1 = +trip1.price;
  }

  // For Trip - 2
  selectedTrip2:SearchResult = new SearchResult();

  flightTrip2Selected(trip2:SearchResult){
    this.selectedTrip2 = trip2;
    this.total2 = +trip2.price;
  }

  //Submit:
  submit(){
    var billing = this.total1+this.total2;
    localStorage.setItem("billing",billing+'');
    this.router.navigate(["dashboard/enter-details"]);
  }

}

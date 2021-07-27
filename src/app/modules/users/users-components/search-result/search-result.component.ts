import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResult } from 'src/app/model/flight-search-result';
import { SearchDetails } from 'src/app/model/search-details.bean';
import { FlightServiceService } from 'src/app/service/flight-service.service';
import { Ticket } from 'src/app/service/ticket';

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

  constructor(private flightService: FlightServiceService, private router:Router, private tservice:Ticket) { }

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
      tripType: this.tservice.searchDetails.tripType,
      sourcePlace: this.tservice.searchDetails.sourcePlace,
      destinationPlace: this.tservice.searchDetails.destinationPlace,
      departureDate: this.tservice.searchDetails.departureDate,
      returnDate: this.tservice.searchDetails.returnDate
    }
  }

  //Do API Calls:

  getSearchResultForOneWayTrip() {
    this.flightService.getSearchResultForOneWay().subscribe(data => {
      this.oneWaySR = data;
    });
  }
  getSearchResultForReturnTrip() {
    this.flightService.getSearchResultForRoundTrip().subscribe(data => {
      this.roundTrip = data;
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
    this.tservice.searchBillAmount.totalBillingAmountBeforeIncludingPassenger = billing;
    this.tservice.searchBillAmount.tripOnePrice = +this.selectedTrip1.price;
    this.tservice.selectedFlightDetailsOnward = this.selectedTrip1;
    if(!!this.flightTrip2Selected){
      this.tservice.selectedFlightDetailsRound = this.selectedTrip2;
      this.tservice.searchBillAmount.tripTwoPrice = +this.selectedTrip2.price;
    }
    this.router.navigate(["dashboard/enter-details"]);
  }

}

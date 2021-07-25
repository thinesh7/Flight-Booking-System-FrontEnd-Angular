import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchResult } from '../model/flight-search-result';
import { SearchDetails } from '../model/search-details.bean';

@Injectable({
  providedIn: 'root'
})
export class Ticket{
    searchDetails:SearchDetails = new SearchDetails();
    searchBillAmount:number = 0;
    ticket:any;
    selectedFlightDetailsOnward:SearchResult = new SearchResult();
    selectedFlightDetailsRound?:SearchResult = new SearchResult();
}
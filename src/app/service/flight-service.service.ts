import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../model/flight-search-result';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  pnrNumber:string = '';

  constructor(private http: HttpClient) { }

  public url: string = "http://localhost:3000";

  //Login:
  
  // Check Admin Login Details:
   getLoginDetail() { //Observable<LoginDetail[]>
    return this.http.get(this.url + "/login-detail");
  }

  //Register New User - Customer:
  registerNewUser(userDetails:any){
    return this.http.post(this.url+"/users-profile",userDetails);
  }

  //Get Users Login Details:
  getUsersLoginDetail() {
    return this.http.get(this.url + "/users-profile");
  }

  //Get List of Airports API:
  getAllAirportList(): Observable<Object[]> {
    return this.http.get<Object[]>(this.url + "/airport-list");
  }

  //Get Search Result:
  getSearchResultForOneWay(): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.url + "/search-result-oneway");
  }

  getSearchResultForRoundTrip(): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.url + "/search-result-round-trip");
  }

  addNewFlight(flightDetails: any) {
    return this.http.post(this.url+"/airport-list", flightDetails);
  }

  //Send booking Details:
  sendTicketBookingDetails(ticket:any){
    return this.http.post(this.url+"/tickets",ticket);
  }

  // Get Booking - History:
  getBookedFlightDetails(){
    return this.http.get(this.url+"/tickets");
  }

  //Schedule Flight:
  scheduleFlight(scheduleFlight:any){
    return this.http.post(this.url+"/flight-details",scheduleFlight);
  }

  //Add New Discount:
  addDiscount(discount:any){
    return this.http.post(this.url+"/discount-details",discount);
  }

  //fetch Discount:
  getDiscountDetails(){
    return this.http.get(this.url+'/discount-details');
  }

  //getAll Scheduled Flights:
  getAllScheduledFlights(){
    return this.http.get(this.url+'/flight-details');
  }

}

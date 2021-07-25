import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../model/flight-search-result';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http: HttpClient) { }

  public url: string = "http://localhost:3000";

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

  // Check Login Details:
  getLoginDetail() { //Observable<LoginDetail[]>
    return this.http.get(this.url + "/login-detail");
  }

  addNewFlight(flightDetails: any) {
    return this.http.post(this.url+"/flights-list", flightDetails);
  }

}

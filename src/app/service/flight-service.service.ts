import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../model/flight-search-result';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http:HttpClient) { }

  public url:string = "http://localhost:3000";

  //Get List of Airports API:
  getAllAirportList():Observable<Object[]>{
    return this.http.get<Object[]>(this.url+"/airport-list");
  }

  //Get Search Result:
  getSearchResultForOneWay():Observable<SearchResult[]>{
    return this.http.get<SearchResult[]>(this.url+"/search-result-oneway");
  }

  getSearchResultForRoundTrip():Observable<SearchResult[]>{
    return this.http.get<SearchResult[]>(this.url+"/search-result-round-trip");
  }

}

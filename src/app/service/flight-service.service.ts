import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http:HttpClient) { }

  public url:string = "http://localhost:3000";

  getAllAirportList():Observable<Object[]>{
    return this.http.get<Object[]>(this.url+"/airport-list");
  }

}

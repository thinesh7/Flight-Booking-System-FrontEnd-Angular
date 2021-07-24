import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PassengerDetails } from 'src/app/model/passenger-details';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

  //Form Elements:
  name:string = "";
  emailId:String = "";
  numberOfPassenger:string='';  
  passengerDetails:PassengerDetails[] = new Array<PassengerDetails>(+this.numberOfPassenger);
  meal:string = "";
  seatNumber:string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

}

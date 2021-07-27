import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-manage-scheduled-flights',
  templateUrl: './manage-scheduled-flights.component.html',
  styleUrls: ['./manage-scheduled-flights.component.scss']
})
export class ManageScheduledFlightsComponent implements OnInit {

  ScheduledAllFlightDetails:any;
  
  constructor(private fService:FlightServiceService) { }

  ngOnInit(): void {
    this.initializeScheduledFlightDetails();
  }

  initializeScheduledFlightDetails(){
    this.fService.getAllScheduledFlights().subscribe(data=>{
      this.ScheduledAllFlightDetails = data;
    });
  }

}

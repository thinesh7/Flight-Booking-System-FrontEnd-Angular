import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private route: Router, private fService: FlightServiceService) { }

  ngOnInit(): void {    
  }

  ticketHistory: any;
  isRoundTrip: boolean = false;

  // Search and Retrive Data:
  getBookingHistory() {
    this.fService.getBookedFlightDetails().subscribe(data => {
      this.ticketHistory = data;
      this.checkRoundTrip();
    });
  }

  //Check Round Trip:
  checkRoundTrip() {
    for (let ticket of this.ticketHistory) {
      if (ticket.tripType == 'roundtrip') {
        this.isRoundTrip = true;
      }
    }
  }

}

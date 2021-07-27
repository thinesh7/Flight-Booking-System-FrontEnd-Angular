import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingsComponent implements OnInit {

  constructor(private route: Router, private fService: FlightServiceService) { }

  ngOnInit(): void {
    this.getBookingHistory();
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

import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/service/flight-service.service';
import { Ticket } from 'src/app/service/ticket';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.scss']
})
export class PaymentGatewayComponent implements OnInit {

  //ticket:
  ticketInfo: any;
  ticketDeatils: Ticket = new Ticket();
  tripType: string = '';

  constructor(private tService: Ticket, private router: Router, private fservice: FlightServiceService) { }

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.ticketDeatils = this.tService;
    this.ticketInfo = this.ticketDeatils.ticket;
    this.tripType = this.tService.searchDetails.tripType.toUpperCase();
  }

  getPassengerList() {
    return this.ticketInfo.passengersList;
  }

  payment() {
    this.ticketInfo.ticketStatus = 'Completed';
    this.fservice.sendTicketBookingDetails(this.ticketInfo).subscribe(data => {
      this.fservice.pnrNumber = 'PNR1001236';
      this.navigateToSuccessPage();
    });
  }

  navigateToSuccessPage() {
    this.router.navigate(["/dashboard/success"]);
  }

}

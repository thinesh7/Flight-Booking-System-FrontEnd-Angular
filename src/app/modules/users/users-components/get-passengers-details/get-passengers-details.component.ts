import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-passengers-details',
  templateUrl: './get-passengers-details.component.html',
  styleUrls: ['./get-passengers-details.component.scss']
})
export class GetPassengersDetailsComponent implements OnInit {

  numberOfPassengers:number = 0;

  constructor(private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  loadPage(pnumbers:number){
    this.numberOfPassengers = pnumbers;
  }

}

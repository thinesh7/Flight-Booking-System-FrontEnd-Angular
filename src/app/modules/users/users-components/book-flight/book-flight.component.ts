import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {

  public flightForm: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeFlightSearchForm();
  }

  initializeFlightSearchForm() {
    this.flightForm = this.formBuilder.group({
      tripType: ['', Validators.required],
      sourcePlace: ['', [Validators.required]],
      destinationPlace: ['', Validators.required],
      depatureDate: ['', Validators.required],
      returnDate: ['']
    })

    

  }

}

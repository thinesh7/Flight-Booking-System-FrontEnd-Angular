import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/service/flight-service.service';

@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.scss']
})
export class ManageDiscountComponent implements OnInit {

  discountApplied: boolean = false;

  //FormGroup:
  discountForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private fService: FlightServiceService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.discountForm = this.formBuilder.group({
      discountCode: new FormControl('', Validators.required),
      discountPercentage: new FormControl(0, Validators.required)
    });
  }

  addDiscount() {
    this.fService.addDiscount(this.discountForm.value).subscribe(data => {
      this.discountApplied = true;
      this.discountForm.reset();
    })
  }

}

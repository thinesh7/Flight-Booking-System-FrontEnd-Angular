import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { BookingHistoryComponent } from './users-components/booking-history/booking-history.component';
import { BookFlightComponent } from './users-components/book-flight/book-flight.component';
import { ManageBookingsComponent } from './users-components/manage-bookings/manage-bookings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookingHistoryComponent,
    BookFlightComponent,
    ManageBookingsComponent,
  ],
  imports: [CommonModule,UsersRoutingModule]
})
export class UsersModule { }

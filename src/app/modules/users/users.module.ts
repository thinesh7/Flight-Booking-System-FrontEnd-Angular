import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { BookingHistoryComponent } from './users-components/booking-history/booking-history.component';
import { BookFlightComponent } from './users-components/book-flight/book-flight.component';
import { ManageBookingsComponent } from './users-components/manage-bookings/manage-bookings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersMenubarComponent } from './users-components/users-menubar/users-menubar.component';
import { UserDashboardComponent } from './users-components/user-dashboard/user-dashboard.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchResultComponent } from './users-components/search-result/search-result.component';
import { GetUserDetailsComponent } from './users-components/get-user-details/get-user-details.component';
import { PaymentGatewayComponent } from './users-components/payment-gateway/payment-gateway.component';
import { PaymentSuccessComponent } from './users-components/payment-success/payment-success.component';

@NgModule({
  declarations: [
    BookingHistoryComponent,
    BookFlightComponent,
    ManageBookingsComponent,
    UsersMenubarComponent,
    UserDashboardComponent,
    SearchResultComponent,
    GetUserDetailsComponent,
    PaymentGatewayComponent,
    PaymentSuccessComponent,
  ],
  imports: [CommonModule,UsersRoutingModule,ReactiveFormsModule,FormsModule,MatNativeDateModule,MatFormFieldModule,
    MatInputModule,MatRadioModule,MatSelectModule,MatAutocompleteModule]
})
export class UsersModule { }

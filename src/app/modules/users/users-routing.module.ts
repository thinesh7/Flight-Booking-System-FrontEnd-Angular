import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { BookFlightComponent } from './users-components/book-flight/book-flight.component';
import { BookingHistoryComponent } from './users-components/booking-history/booking-history.component';
import { GetUserDetailsComponent } from './users-components/get-user-details/get-user-details.component';
import { ManageBookingsComponent } from './users-components/manage-bookings/manage-bookings.component';
import { PaymentGatewayComponent } from './users-components/payment-gateway/payment-gateway.component';
import { PaymentSuccessComponent } from './users-components/payment-success/payment-success.component';
import { SearchResultComponent } from './users-components/search-result/search-result.component';
import { UserDashboardComponent } from './users-components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: "dashboard", component: UserDashboardComponent,

    children: [
      { path: "searchFlight", component: BookFlightComponent },
      { path: "search-result", component: SearchResultComponent },
      {path: "enter-details", component: GetUserDetailsComponent},
      { path:"paymet",component:PaymentGatewayComponent},
      { path:"success",component:PaymentSuccessComponent},
      { path:"manage-booking",component:ManageBookingsComponent},
      { path:"booking-history",component:BookingHistoryComponent}
    ]
  },
  {path:"about", component:AboutComponent},
  {path:"contactus", component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

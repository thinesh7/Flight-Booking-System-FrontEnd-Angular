import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { UsersLoginGuard } from 'src/app/guards/users-login.guard';
import { BookFlightComponent } from './users-components/book-flight/book-flight.component';
import { BookingHistoryComponent } from './users-components/booking-history/booking-history.component';
import { GetUserDetailsComponent } from './users-components/get-user-details/get-user-details.component';
import { ManageBookingsComponent } from './users-components/manage-bookings/manage-bookings.component';
import { PaymentGatewayComponent } from './users-components/payment-gateway/payment-gateway.component';
import { PaymentSuccessComponent } from './users-components/payment-success/payment-success.component';
import { SearchResultComponent } from './users-components/search-result/search-result.component';
import { UserDashboardComponent } from './users-components/user-dashboard/user-dashboard.component';
import { UserRegisterComponent } from './users-components/user-register/user-register.component';
import { UsersLoginComponent } from './users-components/users-login/users-login.component';

const routes: Routes = [
  { path: "users-login", component: UsersLoginComponent },
  { path: "users-signup", component: UserRegisterComponent},
  {
    path: "dashboard", component: UserDashboardComponent, canActivate: [UsersLoginGuard],
    children: [
      { path: "searchFlight", component: BookFlightComponent, canActivate: [UsersLoginGuard] },
      { path: "search-result", component: SearchResultComponent, canActivate: [UsersLoginGuard] },
      { path: "enter-details", component: GetUserDetailsComponent , canActivate: [UsersLoginGuard]},
      { path: "paymet", component: PaymentGatewayComponent , canActivate: [UsersLoginGuard]},
      { path: "success", component: PaymentSuccessComponent , canActivate: [UsersLoginGuard]},
      { path: "manage-booking", component: ManageBookingsComponent , canActivate: [UsersLoginGuard]},
      { path: "booking-history", component: BookingHistoryComponent , canActivate: [UsersLoginGuard]}
    ]
  },
  { path: "about", component: AboutComponent },
  { path: "contactus", component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

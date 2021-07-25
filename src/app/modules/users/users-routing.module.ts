import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './users-components/book-flight/book-flight.component';
import { GetPassengersDetailsComponent } from './users-components/get-passengers-details/get-passengers-details.component';
import { GetUserDetailsComponent } from './users-components/get-user-details/get-user-details.component';
import { SearchResultComponent } from './users-components/search-result/search-result.component';
import { UserDashboardComponent } from './users-components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: "dashboard", component: UserDashboardComponent,

    children: [
      { path: "searchFlight", component: BookFlightComponent },
      { path: "search-result", component: SearchResultComponent },
      {
        path: "enter-details", component: GetUserDetailsComponent,
        children: [{ path: "enter-details/:id", component: GetPassengersDetailsComponent }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

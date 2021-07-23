import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './users-components/book-flight/book-flight.component';
import { UserDashboardComponent } from './users-components/user-dashboard/user-dashboard.component';
import { UsersMenubarComponent } from './users-components/users-menubar/users-menubar.component';

const routes: Routes = [

  {
    path: "dashboard", component: UserDashboardComponent,
    children: [
      { path: "searchFlight", component: BookFlightComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

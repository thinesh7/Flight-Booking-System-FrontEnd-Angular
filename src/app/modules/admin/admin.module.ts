import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddAirlineComponent } from './admin-components/add-airline/add-airline.component';
import { AdminMenuComponent } from './admin-components/admin-menu/admin-menu.component';
import { AdminLoginComponent } from './admin-components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';
import { ManageFlightsComponent } from './admin-components/manage-flights/manage-flights.component';
import { ManageDiscountComponent } from './admin-components/manage-discount/manage-discount.component';
import { ManageScheduledFlightsComponent } from './admin-components/manage-scheduled-flights/manage-scheduled-flights.component';

@NgModule({
  declarations: [AddAirlineComponent, AdminMenuComponent, AdminLoginComponent, AdminDashboardComponent, ManageFlightsComponent, ManageDiscountComponent, ManageScheduledFlightsComponent],
  imports: [CommonModule,AdminRoutingModule,ReactiveFormsModule,RouterModule],
  providers:[LoginGuardGuard]
})
export class AdminModule { }

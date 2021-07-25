import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAirlineComponent } from './admin-components/add-airline/add-airline.component';
import { AdminMenuComponent } from './admin-components/admin-menu/admin-menu.component';
import { AdminLoginComponent } from './admin-components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddNewFlightComponent } from './admin-components/add-new-flight/add-new-flight.component';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';


@NgModule({
  declarations: [AddAirlineComponent, AdminMenuComponent, AdminLoginComponent, AdminDashboardComponent, AddNewFlightComponent],
  imports: [CommonModule,AdminRoutingModule,ReactiveFormsModule,RouterModule],
  providers:[LoginServiceService,LoginGuardGuard]
})
export class AdminModule { }

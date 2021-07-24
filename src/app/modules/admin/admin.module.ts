import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAirlineComponent } from './admin-components/add-airline/add-airline.component';
import { AdminMenuComponent } from './admin-components/admin-menu/admin-menu.component';
import { AdminLoginComponent } from './admin-components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [AddAirlineComponent, AdminMenuComponent, AdminLoginComponent, AdminDashboardComponent],
  imports: [CommonModule,AdminRoutingModule]
})
export class AdminModule { }

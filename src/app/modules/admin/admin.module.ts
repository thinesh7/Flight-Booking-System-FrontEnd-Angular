import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAirlineComponent } from './admin-components/add-airline/add-airline.component';
import { AdminMenuComponent } from './admin-components/admin-menu/admin-menu.component';


@NgModule({
  declarations: [AddAirlineComponent, AdminMenuComponent],
  imports: [CommonModule,AdminRoutingModule]
})
export class AdminModule { }

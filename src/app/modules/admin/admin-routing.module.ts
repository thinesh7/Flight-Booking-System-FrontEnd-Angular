import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';
import { AddAirlineComponent } from './admin-components/add-airline/add-airline.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-components/admin-login/admin-login.component';

const routes: Routes = [
  {path:"login",component:AdminLoginComponent},
  {path:"dashboard",component:AdminDashboardComponent, canActivate:[LoginGuardGuard],children:[
    {path:"add-airline", component:AddAirlineComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

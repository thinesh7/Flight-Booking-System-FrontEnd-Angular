import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { UsersModule } from './modules/users/users.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FlightServiceService } from './service/flight-service.service';
import { Billing } from './service/billing';
import { Ticket } from './service/ticket';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ContactUsComponent, AboutComponent],
  imports: [BrowserModule,AppRoutingModule,AdminModule,UsersModule,FormsModule, BrowserAnimationsModule,MatSliderModule
    ,RouterModule, MatNativeDateModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatSelectModule,HttpClientModule],
  providers: [FlightServiceService,Billing,Ticket],
  bootstrap: [AppComponent]
})
export class AppModule { }

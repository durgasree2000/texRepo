import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { AboutusComponent } from './auth/aboutus/aboutus.component';
import { ContactusComponent } from './auth/contactus/contactus.component';
import { AppointmentComponent } from './auth/appointment/appointment.component';
import { AboutComponent } from './auth/about/about.component';
import { BillComponent } from './bill/bill.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AppointmentComponent,
    AboutComponent,
    BillComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

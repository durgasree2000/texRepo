import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { AboutusComponent } from './auth/aboutus/aboutus.component';
import { ContactusComponent } from './auth/contactus/contactus.component';
import { AppointmentComponent } from './auth/appointment/appointment.component';
import { AboutComponent } from './auth/about/about.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
{path: '' , component:LoginComponent},
{path: 'login' , component:LoginComponent},
{path:'logout', component:LogoutComponent},
{path: 'register',component:RegisterComponent},
{path: 'home', component:HomeComponent},
{path: 'aboutus' , component:AboutusComponent},
{path: 'contactus' , component:ContactusComponent},
{path: 'appointment' , component:AppointmentComponent},
{path: 'about' , component:AboutComponent},
{path: 'bill' , component:BillComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

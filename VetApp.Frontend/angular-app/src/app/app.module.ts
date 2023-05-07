import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentsTableComponent } from './appointments-table/appointments-table.component';
import {RouterModule, Routes} from "@angular/router";
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppointmentsService} from "./services/appointments.service";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppointmentsSectionComponent } from './appointments-section/appointments-section.component';

const routes: Routes = [
  {path:'',component:WelcomeSectionComponent},
  {path: 'appointments/:doctorName', component: AppointmentsTableComponent},
  {path: 'appointments', component: AppointmentsSectionComponent},
  {path: 'appointments/all', component: AppointmentsTableComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    AppointmentsTableComponent,
    WelcomeSectionComponent,
    AppointmentsSectionComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

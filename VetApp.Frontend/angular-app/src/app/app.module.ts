import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentsTableComponent } from './appointments-table/appointments-table.component';
import {RouterModule, Routes} from "@angular/router";
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppointmentsService} from "./services/appointments.service";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {path:'',component:WelcomeSectionComponent},
  {path: 'appointments', component: AppointmentsTableComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AppointmentsTableComponent,
    WelcomeSectionComponent
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

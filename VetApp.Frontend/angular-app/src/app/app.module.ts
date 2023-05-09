import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentsTableComponent } from './components/appointments-table/appointments-table.component';
import {RouterModule, Routes} from "@angular/router";
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppointmentsService} from "./services/appointments.service";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppointmentsSectionComponent } from './components/appointments-section/appointments-section.component';
import { AddNewAppointmentComponent } from './components/add-new-appointment/add-new-appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditSectionComponent } from './components/edit-section/edit-section.component';
import { ProceduresSectionComponent } from './components/procedures-section/procedures-section.component';

const routes: Routes = [
  {path:'',component:WelcomeSectionComponent},
  {path: 'appointments/:doctorName', component: AppointmentsTableComponent},
  {path: 'appointments', component: AppointmentsSectionComponent},
  {path: 'appointments/all', component: AppointmentsTableComponent},
  {path: 'addNewAppointment', component: AddNewAppointmentComponent},
  {path:'editAppointment/:id',component:EditSectionComponent},
  {path:'procedures',component:ProceduresSectionComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AppointmentsTableComponent,
    WelcomeSectionComponent,
    AppointmentsSectionComponent,
    AddNewAppointmentComponent,
    EditSectionComponent,
    ProceduresSectionComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

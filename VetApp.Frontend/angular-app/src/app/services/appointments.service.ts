import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Appointment} from "../common/appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private appointmentsUrl: string = 'http://localhost:8080/api/appointments';

  constructor(private http:HttpClient) { }

  getAppointmentList(): Observable<Appointment[]> {
    return this.http.get<GetResponseAppointments>(this.appointmentsUrl).pipe(map(response => response._embedded.appointments));

  }
}

interface GetResponseAppointments {
  _embedded: {
    appointments: Appointment[];
  }
}

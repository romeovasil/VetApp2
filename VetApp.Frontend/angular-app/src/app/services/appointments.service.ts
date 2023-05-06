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


  getAppointmentListPaginated(thePage:number,thePageSize:number): Observable<GetResponseAppointments> {
    const pageUrl = `${this.appointmentsUrl}`+`?page=${thePage}&size=${thePageSize}`
    return this.http.get<GetResponseAppointments>(pageUrl);

  }


  getAppointmentList(): Observable<Appointment[]> {
    return this.http.get<GetResponseAppointments>(this.appointmentsUrl).pipe(map(response => response._embedded.appointments));

  }
}

interface GetResponseAppointments {
  _embedded: {
    appointments: Appointment[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}

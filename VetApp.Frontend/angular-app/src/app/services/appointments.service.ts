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


  getAppointment(id:number): Observable<Appointment> {
    const appointmentUrl = `${this.appointmentsUrl}`+`/${id}`
    return this.http.get<Appointment>(appointmentUrl);
  }


  getAppointmentListPaginatedByDoctorName(doctorName:string,thePage:number,thePageSize:number): Observable<GetResponseAppointments> {
    let pageUrl = `${this.appointmentsUrl}`+`?projection=customAppointment&sort=date,time&page=${thePage}&size=${thePageSize}`
    if(doctorName!="all")
    {
      pageUrl = `${this.appointmentsUrl}`+`/search/findByDoctorName?projection=customAppointment&sort=date,time&doctorName=${doctorName}&page=${thePage}&size=${thePageSize}`


    }
    console.log(pageUrl);
    return this.http.get<GetResponseAppointments>(pageUrl);
  }

  addNewAppointment(appointment: Appointment):Observable<any> {
    return this.http.post<Appointment>(this.appointmentsUrl,appointment);
  }

  editAppointment(appointment: Appointment):Observable<any> {
    return this.http.put<Appointment>(`${this.appointmentsUrl}`+`/${appointment.id}`,appointment);

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

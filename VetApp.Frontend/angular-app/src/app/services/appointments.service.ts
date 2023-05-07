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


  getAppointmentListPaginatedByDoctorName(doctorName:string,thePage:number,thePageSize:number): Observable<GetResponseAppointments> {
    let pageUrl = `${this.appointmentsUrl}`+`?page=${thePage}&size=${thePageSize}`
    if(doctorName!="all")
    {
      pageUrl = `${this.appointmentsUrl}`+`/search/findByDoctorName?doctorName=${doctorName}&page=${thePage}&size=${thePageSize}`
      console.log(doctorName);
      console.log(pageUrl);
    }
    return this.http.get<GetResponseAppointments>(pageUrl);
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

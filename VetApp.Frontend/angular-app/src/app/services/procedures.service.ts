import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../common/appointment";
import {Procedure} from "../common/procedure";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  private appointmentsUrl: string = 'http://localhost:8080/api/procedures';

  constructor(private http:HttpClient) { }

  public getProcedures(): Observable<Procedure[]> {
    return this.http.get<GetResponseProcedures>(this.appointmentsUrl).pipe(map(response => response._embedded.procedures));
  }

  addNewProcedure(procedure: Procedure) {
    return this.http.post<Appointment>(this.appointmentsUrl,procedure);
  }

  addProcedureToAppointment(appointmentData:any){
      const url = "http://localhost:8080/api/procedure/addNewProcedureToAppointment";
      console.log(appointmentData)
      return this.http.post<any>(url,appointmentData);
  }
}



interface GetResponseProcedures {
  _embedded: {
    procedures: Procedure[];
  }
}

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

}



interface GetResponseProcedures {
  _embedded: {
    procedures: Procedure[];
  }
}

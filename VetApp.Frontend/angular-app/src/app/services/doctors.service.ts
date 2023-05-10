import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  url:string ="http://localhost:8080/api/doctors";
  constructor(private http:HttpClient) { }

  getAllDoctors() {
      return this.http.get<any>(this.url);
  }
}

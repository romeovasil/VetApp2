import {Component, OnInit} from '@angular/core';
import {Appointment} from "../common/appointment";
import {AppointmentsService} from "../services/appointments.service";

@Component({
  selector: 'app-appointments-table',
  templateUrl: './appointments-table.component.html',
  styleUrls: ['./appointments-table.component.scss']
})
export class AppointmentsTableComponent implements OnInit{

  appointments:Appointment[]=[];

  constructor(private appointmentService:AppointmentsService) {
  }

  ngOnInit(): void {
    this.listAppointments();
  }

  private listAppointments() {

    this.appointmentService.getAppointmentList().subscribe(data=>{
      this.appointments=data;

    })
  }
}

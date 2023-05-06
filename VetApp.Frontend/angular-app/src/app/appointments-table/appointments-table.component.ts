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

  thePageNumber:number=1;
  currentPageNumber:number=1;
  thePageSize:number=5;
  theTotalElements:number=0;

  constructor(private appointmentService:AppointmentsService) {
  }

  ngOnInit(): void {
    this.listAppointments();
  }

  public listAppointments() {

    this.appointmentService.getAppointmentListPaginated(this.currentPageNumber-1,this.thePageSize).subscribe(data=>{
      this.appointments=data._embedded.appointments;
      this.theTotalElements=data.page.totalElements;
      this.thePageNumber=data.page.totalPages;

    })
  }

  incrementpage() {
    if(this.currentPageNumber<this.thePageNumber)
    {
      console.log(this.currentPageNumber)
      this.currentPageNumber++;
      this.listAppointments();
    }

  }

  decrementPage() {
    if(this.currentPageNumber>1) {
      console.log(this.currentPageNumber)
      this.currentPageNumber = this.currentPageNumber - 1;
      this.listAppointments();
    }
  }
}

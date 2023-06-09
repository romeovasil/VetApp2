import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../common/appointment";
import {AppointmentsService} from "../../services/appointments.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-appointments-table',
  templateUrl: './appointments-table.component.html',
  styleUrls: ['./appointments-table.component.scss']
})
export class AppointmentsTableComponent implements OnInit{
  id:number=0;
  appointments:Appointment[]=[];
  doctorName:string="";
  thePageNumber:number=1;
  currentPageNumber:number=1;
  thePageSize:number=5;
  theTotalElements:number=0;
  totalPrice:number=0;

  constructor(private appointmentService:AppointmentsService ,private route:ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listAppointments();
    });
  }
  public listAppointments() {
    const hasDoctorName:boolean = this.route.snapshot.paramMap.has('doctorName');

    if(hasDoctorName) {
      this.doctorName = this.route.snapshot.paramMap.get('doctorName')!;
    }
    else {
      this.doctorName="all";
    }

    this.appointmentService.getAppointmentListPaginatedByDoctorName(this.doctorName,this.currentPageNumber - 1, this.thePageSize).subscribe(data => {
      this.appointments = data._embedded.appointments;
      console.log(this.appointments)
      this.calculatePrice();
      this.theTotalElements = data.page.totalElements;
      this.thePageNumber = data.page.totalPages;

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




  editAppointment(tempAppointment: Appointment) {
    console.log("edit")
    console.log(tempAppointment.id)
    this.router.navigate(['/editAppointment',tempAppointment.id]);
  }

  private calculatePrice() {
      for(let tempAppointment  of this.appointments){
          let s = 0;
          for(let procedure of tempAppointment.procedureList){
            s=s+procedure.price;
          }
          tempAppointment.totalPrice=s;
      }
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Appointment} from "../../common/appointment";
import {AppointmentsService} from "../../services/appointments.service";

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit{
  id:any=0 ;
  appointment:Appointment|null=null;


  constructor(private route:ActivatedRoute,private appointmentsService:AppointmentsService) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.appointmentsService.getAppointment(this.id).subscribe(
      data=> this.appointment=data
    );
  }

}

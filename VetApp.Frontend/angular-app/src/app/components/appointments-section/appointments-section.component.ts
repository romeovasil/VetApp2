import {Component, OnInit} from '@angular/core';
import {DoctorsService} from "../../services/doctors.service";

@Component({
  selector: 'app-appointments-section',
  templateUrl: './appointments-section.component.html',
  styleUrls: ['./appointments-section.component.scss']
})
export class AppointmentsSectionComponent implements  OnInit{
  doctors:String[]=[];

  constructor(private doctorsService:DoctorsService) {
  }

  ngOnInit(): void {
      this.doctorsService.getAllDoctors().subscribe(data=>{
        this.doctors=data.doctors;
        console.log(this.doctors)
      })
  }

}

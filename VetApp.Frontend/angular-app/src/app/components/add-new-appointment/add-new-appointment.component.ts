import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Appointment} from "../../common/appointment";
import {AppointmentsService} from "../../services/appointments.service";


@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.component.html',
  styleUrls: ['./add-new-appointment.component.scss']
})
export class AddNewAppointmentComponent implements OnInit{
  checkoutFormGroup!: FormGroup;

  constructor(private formBuilder:FormBuilder,private appointmentService:AppointmentsService) {
  }
  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
        animalName: new FormControl('',Validators.required),
        doctorName: new FormControl('',Validators.required),
        date: new FormControl('',Validators.required),
        time: new FormControl('',Validators.required),
        procedures: new FormControl('',Validators.required)

      });
  }


  onSubmit() {
    if (this.checkoutFormGroup.invalid) {
      console.log("invalid")
      this.checkoutFormGroup.markAllAsTouched();

      return;
    } else {
      console.log("valid")
      let appointment = this.createNewAppointment();
      console.log(appointment);
      this.appointmentService.addNewAppointment(appointment).subscribe(
        response => {
          console.log('Appointment saved successfully:', response);
          this.checkoutFormGroup.reset();
        },
        error => {
          console.error('Error saving appointment:', error);
        }
      );


    }
  }


  createNewAppointment(){
    let appointment = new Appointment();
    appointment.animal=this.animalName?.value;
    appointment.doctorName=this.doctorName?.value;
    appointment.data = this.date?.value;
    appointment.time = this.time?.value;
    appointment.procedures = this.procedures?.value;
    appointment.status="creata";
    appointment.diagnostic="investigare...";
    return appointment;
  }

  get animalName() { return this.checkoutFormGroup.get('animalName'); }
  get doctorName() { return this.checkoutFormGroup.get('doctorName'); }
  get date() { return this.checkoutFormGroup.get('date'); }
  get time() { return this.checkoutFormGroup.get('time'); }
  get procedures() { return this.checkoutFormGroup.get('procedures'); }

}

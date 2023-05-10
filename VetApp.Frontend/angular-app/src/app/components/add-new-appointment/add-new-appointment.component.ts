import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Appointment} from "../../common/appointment";
import {AppointmentsService} from "../../services/appointments.service";
import {CustomValidators} from "../../validators/customValidators";
import {Procedure} from "../../common/procedure";
import {ProceduresService} from "../../services/procedures.service";


@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.component.html',
  styleUrls: ['./add-new-appointment.component.scss']
})
export class AddNewAppointmentComponent implements OnInit{
  checkoutFormGroup!: FormGroup;
  proceduresList:Procedure[]=[];
  selectedProcedures:Procedure[]=[];

  constructor(private formBuilder:FormBuilder,private appointmentService:AppointmentsService,private proceduresService:ProceduresService) {
  }
  ngOnInit(): void {

    this.proceduresService.getProcedures().subscribe(data=>{
      this.proceduresList=data;
      console.log(this.proceduresList);
    })

    this.checkoutFormGroup = this.formBuilder.group({
        animalName: new FormControl('',[Validators.required,CustomValidators.notOnlyWhitespace]),
        doctorName: new FormControl('',[Validators.required,CustomValidators.notOnlyWhitespace]),
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
          this.selectedProcedures.forEach((procedure) => {
            let appointmentData = {
              appointment: response,
              procedure: procedure
            };
            this.proceduresService.addProcedureToAppointment(appointmentData).subscribe(
              (procedureResponse) => {
                console.log("Procedure added to appointment:", procedureResponse);
              },
              (procedureError) => {
                console.error("Error adding procedure to appointment:", procedureError);
              }
            );
          });

          // Reset the form and the selected procedures
          this.checkoutFormGroup.reset();
          this.selectedProcedures = [];
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
    appointment.date = this.date?.value;
    appointment.time = this.time?.value;
    appointment.procedures = this.procedures?.value;
    this.selectedProcedures.push(<Procedure>this.proceduresList.find(procedure => procedure.name === this.procedures?.value));
    console.log(this.selectedProcedures);
    appointment.status="Creata";
    appointment.diagnostic="";
    return appointment;
  }



  get animalName() { return this.checkoutFormGroup.get('animalName'); }
  get doctorName() { return this.checkoutFormGroup.get('doctorName'); }
  get date() { return this.checkoutFormGroup.get('date'); }
  get time() { return this.checkoutFormGroup.get('time'); }
  get procedures() { return this.checkoutFormGroup.get('procedures'); }

}

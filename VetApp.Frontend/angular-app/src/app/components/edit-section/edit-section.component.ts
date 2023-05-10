import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Appointment} from "../../common/appointment";
import {AppointmentsService} from "../../services/appointments.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../validators/customValidators";
import {Procedure} from "../../common/procedure";
import {ProceduresService} from "../../services/procedures.service";

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit{
  id:any=0 ;
  appointment:Appointment|null=null;
  checkoutFormGroup!: FormGroup;
  selectedProcedure: boolean=false;
  proceduresList:Procedure[] =[];
  procedureToEdit!:Procedure;
  selectedProcedures:Procedure[]=[];

  constructor(private route:ActivatedRoute,private appointmentsService:AppointmentsService,
              private formBuilder:FormBuilder,private router:Router,
              private proceduresService:ProceduresService) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.appointmentsService.getAppointment(this.id).subscribe(
      data=> {this.appointment=data;
        this.selectedProcedures=data.procedureList;
        this.procedureToEdit=data.procedureList[0];
        console.log(data)
    this.proceduresService.getProcedures().subscribe(data=>{
      this.proceduresList=data;

      console.log(this.procedureToEdit);
    })

    this.checkoutFormGroup.patchValue({
      animalName: data.animal,
      doctorName: data.doctorName,
      date: data.date,
      time: data.time,
      status:data.status,
      diagnostic:data.diagnostic
    });

    this.selectedProcedure=true;
  }
    );

    this.checkoutFormGroup = this.formBuilder.group({
      animalName: new FormControl('',[Validators.required,CustomValidators.notOnlyWhitespace]),
      doctorName: new FormControl('',[Validators.required,CustomValidators.notOnlyWhitespace]),
      date: new FormControl('',Validators.required),
      time: new FormControl('',Validators.required),
      status: new FormControl('',[Validators.required]),
      diagnostic: new FormControl(''),
      procedures: new FormControl('')

    },{validators:CustomValidators.statusIfDiagnosticExists});

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
      this.appointmentsService.editAppointment(appointment).subscribe(
        response => {
          console.log('Appointment saved successfully:', response);
          this.checkoutFormGroup.reset();
          this.router.navigateByUrl("\appointments");
        },
        error => {
          console.error('Error saving appointment:', error);
        }
      );


    }


    }

  createNewAppointment(){
    let appointment = new Appointment();
    appointment.id=this.id;
    appointment.animal=this.animalName?.value;
    appointment.doctorName=this.doctorName?.value;
    appointment.date = this.date?.value;
    appointment.time = this.time?.value;
    appointment.procedures = this.procedures?.value;
    appointment.status=this.status?.value;
    appointment.diagnostic=this.diagnostic?.value;
    return appointment;
  }

  get animalName() { return this.checkoutFormGroup.get('animalName'); }
  get doctorName() { return this.checkoutFormGroup.get('doctorName'); }
  get date() { return this.checkoutFormGroup.get('date'); }
  get time() { return this.checkoutFormGroup.get('time'); }
  get procedures() { return this.checkoutFormGroup.get('procedures'); }
  get status() { return this.checkoutFormGroup.get('status'); }
  get diagnostic() { return this.checkoutFormGroup.get('diagnostic'); }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-new-appointment',
  templateUrl: './add-new-appointment.component.html',
  styleUrls: ['./add-new-appointment.component.scss']
})
export class AddNewAppointmentComponent implements OnInit{
  checkoutFormGroup!: FormGroup;

  constructor(private formBuilder:FormBuilder) {
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
    console.log("works")
    if (this.checkoutFormGroup.invalid) {
      console.log("invalid")
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }
    else{
      console.log("valid")
    }
  }
}

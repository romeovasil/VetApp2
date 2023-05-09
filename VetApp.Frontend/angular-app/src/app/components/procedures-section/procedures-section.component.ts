import {Component, OnInit} from '@angular/core';
import {ProceduresService} from "../../services/procedures.service";
import {Procedure} from "../../common/procedure";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../validators/customValidators";
import {Appointment} from "../../common/appointment";

@Component({
  selector: 'app-procedures-section',
  templateUrl: './procedures-section.component.html',
  styleUrls: ['./procedures-section.component.scss']
})
export class ProceduresSectionComponent implements OnInit{
  proceduresFormGroup!: FormGroup;
  procedures:Procedure[]=[];
  showedForm:boolean=false;
  constructor(private proceduresService:ProceduresService,private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.proceduresService.getProcedures().subscribe(data=>{
        this.procedures=data;
    });

    this.proceduresFormGroup = this.formBuilder.group({
      procedureName: new FormControl('',[Validators.required,CustomValidators.notOnlyWhitespace]),
      price: new FormControl('',[Validators.required,CustomValidators.notOnlyWhitespace]),
    });
  }

  showNewProcedureForm(state:boolean){
    this.showedForm=state;
  }

  get procedureName() { return this.proceduresFormGroup.get('procedureName'); }
  get price() { return this.proceduresFormGroup.get('price'); }


  onSubmit() {
    if (this.proceduresFormGroup.invalid) {
      console.log("invalid")
      this.proceduresFormGroup.markAllAsTouched();

      return;
    } else {

      let procedure: Procedure = this.createNewProcedure();
      console.log(procedure);
      this.procedures.push(procedure);
      this.proceduresService.addNewProcedure(procedure).subscribe(
        response => {
          console.log('Procedure saved successfully:', response);
          this.proceduresFormGroup.reset();
        },
        error => {
          console.error('Error saving appointment:', error);
        }
      );
    }
  }

  private createNewProcedure() {
    let procedure = new Procedure(this.procedureName?.value,this.price?.value);
    return procedure;
  }
}

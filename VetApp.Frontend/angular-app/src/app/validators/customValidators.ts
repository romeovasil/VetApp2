import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";

export class CustomValidators {

  static notOnlyWhitespace(control:FormControl): ValidationErrors | null{

      if((control.value!=null) && (control.value.trim().length ===0)){
          return {'notOnlyWhitespace':true};
    }

      return null;
  }

  static statusIfDiagnosticExists(group:FormGroup,diagnostic:string):ValidationErrors | null{
    const statusControl = group.get('status');
    const diagnosticControl = group.get('diagnostic');

    if (statusControl?.value === 'Incheiata' && (diagnosticControl?.value == '' || (diagnosticControl?.value.trim().length===0))) {
      return { statusDiagnosticError: true };
    }
    return null;
  }
}

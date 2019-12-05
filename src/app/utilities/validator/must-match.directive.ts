import { Directive, Input } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMustMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: MustMatchValidatorDirective, multi: true}]
})
export class MustMatchValidatorDirective implements Validator {
  @Input('appMustMatch') controlNames: string[]; 
  validate(control: AbstractControl): {[key: string]: any} | null {

    // console.log(this.controlNames)
    if ( this.controlNames) {
      return control.get(this.controlNames[0]).value !== control.get(this.controlNames[1]).value ? {'mustMatch': true} : null;
    } else return null;
    
  }

}

export function mustMatchValidator(controlName: string, matchingControlName: string) {
  return (group: FormGroup) => {
    let control = group.get(controlName);
    let matchingControl = group.get(matchingControlName);

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

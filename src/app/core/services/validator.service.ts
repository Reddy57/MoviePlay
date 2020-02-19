import { AbstractControl, AsyncValidator, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private userService: UserService) {

  }

  // checkIfEmailExists(email:string): Observable<boolean> {
  //   return of(this.emailExistsValidator(email))

  // }
  emailExistsValidator(): AsyncValidatorFn {

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.log('inside validator');
      console.log(control);
      return this.userService.isEmailExists(control.value).pipe(
        map(emailTaken => (emailTaken ? { uniqueEmail: true } : null))
      );
    };
  }

  // validate(control: AbstractControl): Observable<ValidationErrors> | null {
  //   return this.userService.isEmailExists(control.value).pipe(
  //     map(emailTaken => (emailTaken ? { uniqueEmail: true } : null))
  //   )
  // }

}

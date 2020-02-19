import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/validator.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  // email = new FormControl('');
  // all Reactive Controls inherit from AbstractControl class
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) {

    // Creating form control instances manually can become repetitive when dealing with multiple forms.
    // The FormBuilder service provides convenient methods for generating controls


    // this.signupForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // });


  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }


  buildForm() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [null, { validators: [Validators.required, Validators.email], asyncValidators: [this.validatorService.emailExistsValidator()], updateOn: 'blur' }],
      password: ['', [Validators.required, this.validatorService.passwordValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.validatorService.passwordMatch });


  }

  ngOnInit() {
    //    console.log(this.email);
    // we can set a value
    // this.email.setValue('test@test.com');
    // console.log(this.signupForm.controls);
    this.buildForm();
  }

  onSubmit() {
    // console.log('submit clicked');
    console.log(this.signupForm);

    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });


  }

  ngOnInit() {
    //    console.log(this.email);
    // we can set a value
    // this.email.setValue('test@test.com');
    // console.log(this.signupForm.controls);
    this.buildForm();
  }

  onSubmit() {
    console.log('submit clicked');
    console.log(this.signupForm.value);

    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

  }

}

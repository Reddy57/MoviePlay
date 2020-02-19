import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/core/services/validator.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  createMovieForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }

  // convenience getter for easy access to form fields
  get f() { return this.createMovieForm.controls; }

  ngOnInit() {

    this.buildForm();
  }
  buildForm() {
    this.createMovieForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(150)]],
      tagline: ['', Validators.maxLength(2084)],
      overview: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8192)]],
      budget: ['', [Validators.max(500000000), Validators.min(20000)]],
      revenue: ['', [Validators.max(5000000000), Validators.min(20)]],
      imdbUrl: ['', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
      tmdbUrl: ['', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
      posterUrl: ['', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
      backdropUrl: ['', Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
      originalLanguage: ['', Validators.maxLength(64)],
      releaseDate: ['', []],
      runTime: ['', [Validators.max(360), Validators.min(10)]],
      price: ['', [Validators.max(100), Validators.min(1)]]

    });
  }

  onSubmit() {
    console.log('submit clicked');
    console.log(this.createMovieForm.controls);
    console.log(this.createMovieForm);
    this.submitted = true;
    // stop here if form is invalid
    if (this.createMovieForm.invalid) {
      return;
    }

  }

}

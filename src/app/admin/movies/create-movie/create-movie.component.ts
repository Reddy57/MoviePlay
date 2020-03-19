import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { GenreService } from 'src/app/core/services/genre.service';
import { Genre } from 'src/app/shared/models/genre';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  createMovieForm: FormGroup;
  submitted = false;
  movie = {} as Movie;

  constructor(private fb: FormBuilder, private genreService: GenreService) {
    this.buildForm();

  }

  // convenience getter for easy access to form fields
  get f() { return this.createMovieForm.controls; }

  ngOnInit() {
    this.genreService.getAllGenres().subscribe(
      g => {
        this.movie.genres = Object.assign([], g);
        // console.log('inside innit');
        // console.log(this.movie.genres)
        this.patchFormWithGenres();

      }
    );

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
      price: ['', [Validators.max(100), Validators.min(1)]],
      genres: new FormArray([])

    });
  }

  patchFormWithGenres() {
    // this.createMovieForm.patchValue({});
    // this.buildGenres();

    this.movie.genres.forEach((o, i) => {
      const control = new FormControl();
      (this.createMovieForm.controls.genres as FormArray).push(control);
    });

  }

  onSubmit() {
    // console.log('submit clicked');
    // console.log(this.createMovieForm.controls);
    console.log(this.createMovieForm);
    console.log(this.createMovieForm.value.genres);
    console.log(this.movie.genres);
    const selectedGenres = this.createMovieForm.value.genres.map((v: any, i: string | number) => (v ? this.movie.genres[i].id : null))
      .filter((v: any) => v !== null);
    console.log(selectedGenres);
    this.submitted = true;
    // stop here if form is invalid
    if (this.createMovieForm.invalid) {
      return;
    }

  }

}

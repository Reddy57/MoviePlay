import { MovieService } from 'src/app/core/services/movie.service';
import { PagedResults } from './../../models/pagedResult';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Movie } from '../../models/movie';
import { Observable, of } from 'rxjs';
import { debounceTime, map, tap, catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  movies: Movie[];
  searchFailed = false;
  searching = false;

  constructor(private movieService: MovieService) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      switchMap(term => term.length < 2 ? []
        : this.movieService.getMovies(term).pipe(
          // tap(() => console.log(term)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false)
    )
  formatter = (x: { title: string }) => x.title;

  ngOnInit() {
  }

  onSelect($event, title) {
    $event.preventDefault();
    title.value = '';
  }


}

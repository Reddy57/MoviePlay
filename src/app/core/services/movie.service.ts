import { PagedResults } from './../../shared/models/pagedResult';
import { Movie } from '../../shared/models/movie';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/toprated');
  }

  getTopGrossingMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/toprevenue');
  }

  getMoviesByGenre(genreId: number): Observable<Movie[]> {
    return this.apiService.getAll(`${'/movies/genre/'}${genreId}`);
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.apiService.getOne(`${'/movies/'}${id}`);
  }

  getMovies(title: string): Observable<Movie[]> {
    const searchParams = new Map<string, string>();
    searchParams.set('title', title);
    return this.apiService.getPagedResults('/movies', searchParams).pipe(map(p => p.data));
  }

}

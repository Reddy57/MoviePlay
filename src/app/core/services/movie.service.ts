import { Movie } from '../../shared/models/movie';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/toprated');
  }

  getTopGrossingMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/topgrossing');
  }

  getMoviesByGenre(genreId: number): Observable<Movie[]> {
    return this.apiService.getAll(`${'/movies/genre/'}${genreId}`);
  }


}

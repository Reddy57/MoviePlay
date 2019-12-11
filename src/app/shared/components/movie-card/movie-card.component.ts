import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Output() toggleFavoriteEvent = new EventEmitter<Movie>();
  @Output() buyMovieEvent = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(movie: Movie) {
    this.toggleFavoriteEvent.emit(movie);
  }
  buyMovie(movie: Movie) {

    this.buyMovieEvent.emit(movie);
  }

}

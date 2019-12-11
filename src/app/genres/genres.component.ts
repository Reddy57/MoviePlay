import { Component, OnInit } from '@angular/core';
import { Genre } from '../shared/models/genre';
import { GenreService } from '../core/services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[];
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getAllGenres()
      .subscribe(
        g => {
          this.genres = g;
        }
      );
  }

}

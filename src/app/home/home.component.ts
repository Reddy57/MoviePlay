import { Component, OnInit } from "@angular/core";
import { MovieService } from "../core/services/movie.service";
import { Movie } from "../shared/models/movie";
import { UserService } from "../core/services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MovieService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe(m => {
      this.movies = m;
    });
  }
  private getMovies() {}
  movieFavorited(movie: Movie) {}

  buyMovie(movie: Movie) {}
}

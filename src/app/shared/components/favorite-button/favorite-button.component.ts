import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Favorite } from '../../models/favorite';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {

  @Input() isFavorited: boolean;
  @Input() movie: Movie;
  @Output() toggle = new EventEmitter<boolean>();
  favorite: Favorite;

  constructor(private router: Router, private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {

  }

  toggleFavorite() {

    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      // this.isAuthenticated = isAuthenticated;
      if (!isAuthenticated) {
        this.router.navigateByUrl('/login');
      }
      this.favorite = {
        movieId: this.movie.id,
        userId: this.authService.getCurrentUser().nameid
      };
      // If the Movie has not been already favorited
      if (!this.isFavorited) {

        this.userService.favoriteMovie(this.favorite).subscribe(
          f => { this.toggle.emit(true); }
        );
      } else {
        this.userService.unfavoriteMovie(this.favorite).subscribe(
          f => { this.toggle.emit(false); }

        );
      }
    });
  }

}

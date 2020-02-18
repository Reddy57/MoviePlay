import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
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
  @Input() movieDetails: Movie;
  @Output() toggle = new EventEmitter<boolean>();
  favorite: Favorite;

  constructor(private router: Router,
    // tslint:disable-next-line: align
    private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    // console.log('Movie is Favorited in Fav Component');
    // console.log(this.isFavorited);
    // console.log(this.movieDetails);

  }

  // ngOnChanges(): void {
  //   console.log('Movie is Favorited in Fav Component');
  //   console.log(this.isFavorited);
  //   console.log(this.movie);
  // }

  toggleFavorite() {

    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      // this.isAuthenticated = isAuthenticated;
      if (!isAuthenticated) {
        this.router.navigateByUrl('/login');
      }
      this.favorite = {
        movieId: this.movieDetails.id,
        userId: +this.authService.getCurrentUser().nameid
      };
      // If the Movie has not been already favorited
      if (!this.isFavorited) {

        this.userService.favoriteMovie(this.favorite).subscribe(
          f => {
            // this.toastr.success('Movie added to Favorites');
            this.toggle.emit(true);
          }
        );
      } else {
        this.userService.unfavoriteMovie(this.favorite).subscribe(
          f => {
            // this.toastr.warning('Movie removed from Favorites');
            this.toggle.emit(false);
          }

        );
      }
    });
  }

}

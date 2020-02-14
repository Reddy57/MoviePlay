import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviePurchaseConfirmComponent } from '../movie-purchase-confirm/movie-purchase-confirm.component';
import { UserDataService } from 'src/app/core/services/user-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  id: number;
  isAuthenticated = false;
  currentMoviePurchased: boolean;
  // tslint:disable-next-line: max-line-length
  constructor(private movieService: MovieService, private route: ActivatedRoute, private authService: AuthenticationService, private router: Router, private modalService: NgbModal, private userDataService: UserDataService) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });

    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id');
        this.movieService.getMovieDetails(this.id)
          .subscribe(m => {
            this.movie = m;
            this.currentMoviePurchased = this.isCurrentMoviePurchased();
            console.log(this.currentMoviePurchased, 'movie purchased');
          });
      }
    );
  }

  buyMovie(movie: Movie) {
    if (this.isAuthenticated) {
      const modalRef = this.modalService.open(MoviePurchaseConfirmComponent);
      modalRef.componentInstance.movie = movie;
    } else {
      this.router.navigateByUrl('/login');
    }

  }

  private isCurrentMoviePurchased(): boolean {

    let ismoviePurchases = false;

    if (this.movie) {
      this.userDataService.purchasedMovies.subscribe(
        pm => {

          ismoviePurchases = (pm.purchasedMovies.some(p => p.id === this.movie.id));

        }

      );

    }
    return ismoviePurchases;
  }

}

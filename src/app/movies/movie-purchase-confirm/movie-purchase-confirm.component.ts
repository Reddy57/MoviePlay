import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Purchase } from 'src/app/shared/models/purchase';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { UserDataService } from 'src/app/core/services/user-data.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-purchase-confirm',
  templateUrl: './movie-purchase-confirm.component.html',
  styleUrls: ['./movie-purchase-confirm.component.css']
})
export class MoviePurchaseConfirmComponent implements OnInit {

  @Input() movie: Movie;
  purchase: Purchase;
  isAuthenticated: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(public activeModal: NgbActiveModal, private authService: AuthenticationService, private userService: UserService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  confirmPurchase() {
    this.purchase = {
      movieId: this.movie.id,
      userId: +this.authService.getCurrentUser().nameid
    };
    // console.log(this.purchase);
    // call api to purchase movie

    this.userService.purchaseMovie(this.purchase).subscribe(
      () => {
        this.userDataService.getallPurchasedMovies();
        // this.toastr.success('Movie Purchased');
        this.activeModal.close();
      },
      (err: any) => {
        console.log('error happened in purchasing the movie', err);
        // this.toastr.error('Something went wring in Movie Purchase');

      }
    );
  }

}

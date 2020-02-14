import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Purchase } from 'src/app/shared/models/purchase';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-movie-purchase-confirm',
  templateUrl: './movie-purchase-confirm.component.html',
  styleUrls: ['./movie-purchase-confirm.component.css']
})
export class MoviePurchaseConfirmComponent implements OnInit {

  @Input() movie: Movie;
  purchase: Purchase;
  isAuthenticated: boolean;

  constructor(public activeModal: NgbActiveModal,
    // tslint:disable-next-line: align
    private authService: AuthenticationService,
    // tslint:disable-next-line: align
    private userService: UserService, ) { }

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
    console.log(this.purchase);
    // call api to purchase movie

    this.userService.purchaseMovie(this.purchase).subscribe(
      () => {

        this.activeModal.close();
      },
      (err: any) => {
        console.log('error happened in purchasing the movie', err);
      }
    );
  }

}

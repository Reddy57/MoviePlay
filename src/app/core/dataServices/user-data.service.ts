import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { BehaviorSubject } from 'rxjs';
import { Purchases } from 'src/app/shared/models/purchases';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  isAuthenticated: boolean;
  curentUser: User;
  private purchasedMoviesSubject = new BehaviorSubject<Purchases>(null);
  purchasedMovies = this.purchasedMoviesSubject.asObservable();

  constructor(private userService: UserService,
              private authService: AuthenticationService) {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (this.isAuthenticated) {
        this.authService.currentUser.subscribe((user: User) => {
          this.curentUser = user;
        });
      }
    });

  }
  getUpdatedPurchasedMovies() {
    // console.log('inside purchased subject');
    this.userService
      .getPurchasedMovies(this.curentUser.nameid)
      .subscribe(m => this.purchasedMoviesSubject.next(m));
  }
}

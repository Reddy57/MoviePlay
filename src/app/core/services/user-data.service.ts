import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { User } from 'src/app/shared/models/user';
import { BehaviorSubject } from 'rxjs';
import { Purchase } from 'src/app/shared/models/purchase';
import { Purchases } from 'src/app/shared/models/purchases';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  isAuthenticated: boolean;
  curentUser: User;

  private purchasedMoviesSubject = new BehaviorSubject<Purchases>(null);
  purchasedMovies = this.purchasedMoviesSubject.asObservable();

  constructor(private userService: UserService, private authService: AuthenticationService) {

    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (this.isAuthenticated) {
        this.authService.currentUser.subscribe((user: User) => {
          this.curentUser = user;
        });
      }
    });
  }

  getallPurchasedMovies() {
    this.userService
      .getPurchasedMovies(this.curentUser.nameid)
      .subscribe(m => this.purchasedMoviesSubject.next(m));
  }

}

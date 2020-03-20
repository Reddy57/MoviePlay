import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserDataService } from '../../services/user-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  favoritesCount: number;
  myMoviesCount: number;
  currentUser: User;
  isAuthenticated: boolean;

  constructor(public authService: AuthenticationService, private router: Router, private userDataService: UserDataService) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (this.isAuthenticated) {
        this.currentUser = this.userDataService.curentUser;
        this.userDataService.getallPurchasedMovies();
        this.userDataService.purchasedMovies.subscribe(
          data => {
            if (data) {
              // console.log(data);
              this.myMoviesCount = data.purchasedMovies.length;
            }
          }
        );
      }
    });

  }
  logout() {

    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}

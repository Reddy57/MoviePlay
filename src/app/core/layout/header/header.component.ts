import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';

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

  constructor(public authService: AuthenticationService, private router: Router, ) { }

  ngOnInit() {
  }
  logout() {

    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}

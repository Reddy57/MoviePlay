import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { JwtStorageService } from './jwt-storage.service';
import { Login } from 'src/app/shared/models/login';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: User;

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService, private jwtStorageService: JwtStorageService) { }

  login(userLogin: Login): Observable<boolean> {
    return this.apiService.create('/account/login', userLogin)
      .pipe(map(response => {
        if (response) {
          this.jwtStorageService.saveToken(response.token);
          this.populateUserInfo();
          return true;
        }
        return false;
      }));

  }

  logout() {
    // Remove JWT from localstorage
    this.jwtStorageService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);

  }

  populateUserInfo() {
    if (this.jwtStorageService.getToken()) {
      const token = this.jwtStorageService.getToken();
      const decodedToken = this.decodedToken();
      this.currentUserSubject.next(decodedToken);
      this.isAuthenticatedSubject.next(true);
    }
  }

  private decodedToken(): User {
    const token = this.jwtStorageService.getToken();
    if (!token || new JwtHelperService().isTokenExpired(this.jwtStorageService.getToken())) {
      this.logout();
      return null;
    }
    const decodedToken = new JwtHelperService().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
}

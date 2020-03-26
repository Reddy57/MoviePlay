import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log("Inside Auth Guard");
    return this.IsAuthenticated(state);
  }

  private IsAuthenticated(state?: RouterStateSnapshot) {
    return this.authenticationService.isAuthenticated.pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          this.router.navigate(["/login"], {
            queryParams: { returnUrl: state.url }
          });
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(["/login"]);
        return of(false);
      })
    );
  }
}

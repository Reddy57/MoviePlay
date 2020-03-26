import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AuthenticationService } from "../services/authentication.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    console.log("inside canLoad");
    console.log(segments);
    return this.checkAdminRole();
    //return of(true);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return of(true);
  }

  checkAdminRole(): Observable<boolean> {
    return this.authenticationService.currentUser.pipe(
      map(e => {
        if (e.role.includes("Admin")) {
          return true;
        } else {
          this.router.navigate(["/notauthorized"]);
          return false;
        }
      }),
      catchError(err => {
        this.router.navigate(["/login"]);
        return of(false);
      })
    );
  }
}

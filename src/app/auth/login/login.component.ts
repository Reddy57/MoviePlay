import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Login } from 'src/app/shared/models/login';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  invalidLogin: boolean;
  returnUrl: string;
  user: User;
  userLogin: Login = {
    password: '',
    email: ''
  };
  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.returnUrl = params.returnUrl || '/');
  }

  login() {
    this.authService.login(this.userLogin)
      .subscribe((response) => {
        if (response) {
          // console.log(' this is returnURL: ' + this.returnUrl);
          this.router.navigate([this.returnUrl]);
        } else {
          this.invalidLogin = true;
        }
      },
        (err: any) => { this.invalidLogin = true, console.log(err); });

  }

}

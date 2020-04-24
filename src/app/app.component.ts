import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./core/services/authentication.service";
import { MovieShopSignalRService } from "./core/realtime/movie-shop-signal-r.service";
import { Observable } from "rxjs";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "MoviePlay";
  discountMessage: string;

  constructor(
    private authService: AuthenticationService,
    private signalRService: MovieShopSignalRService
  ) {}

  ngOnInit() {
    this.authService.populateUserInfo();
    this.signalRService.startConnection();
    this.signalRService.messageReceived$.subscribe((data) => {
      this.discountMessage = data;
      console.log(this.discountMessage);
    });
  }

  close() {
    this.discountMessage = null;
  }
}

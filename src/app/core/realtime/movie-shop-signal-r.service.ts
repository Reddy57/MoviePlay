import { Injectable } from "@angular/core";
import * as signalR from "@microsoft/signalr";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class MovieShopSignalRService {

  messageReceived$ = new Subject<string>();

  constructor() {
    this.startConnection();
    this.notificationListener();
  }

  private hubConnection: signalR.HubConnection;

  public startConnection()  {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44312/movieshophub")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log("Connection started"))
      .catch((err) => console.log("Error while starting connection: " + err));
  };

  private notificationListener()  {
    this.hubConnection.on("discountNotification", (data) => {
      console.log('inside signalr')
      this.messageReceived$.next(data);
      console.log(this.messageReceived$)
    });
  };

  
}

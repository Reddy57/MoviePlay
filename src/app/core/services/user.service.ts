import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Purchase } from 'src/app/shared/models/purchase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  purchaseMovie(purchase: Purchase) {
    console.log('inside User Service');
    return this.apiService.create('/user/purchase', purchase);
  }
}

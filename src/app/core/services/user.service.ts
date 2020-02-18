import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Purchase } from 'src/app/shared/models/purchase';
import { Observable } from 'rxjs';
import { Purchases } from 'src/app/shared/models/purchases';
import { Favorite } from 'src/app/shared/models/favorite';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  purchaseMovie(purchase: Purchase) {
    console.log('inside User Service');
    return this.apiService.create('/user/purchase', purchase);
  }

  getPurchasedMovies(id: number): Observable<Purchases> {
    return this.apiService.getOne(`${'/user/'}${id}${'/purchases'}`);
  }
  favoriteMovie(favorite: Favorite) {
    return this.apiService.create('/user/favorite', favorite);
  }
  unfavoriteMovie(favorite: Favorite) {
    return this.apiService.create('/user/unfavorite', favorite);
  }
  isMovieFavorited(userId: number, movieId: number): Observable<any> {
    console.log(userId);
    console.log(movieId);
    return this.apiService.getOne(`${'/user/'}${userId}/movie/${movieId}${'/favorite'}`);
  }
}

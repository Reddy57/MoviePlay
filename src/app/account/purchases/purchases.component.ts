import { UserDataService } from 'src/app/core/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { Purchases } from 'src/app/shared/models/purchases';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  movies: Movie[];
  purchasedMovies: Purchases;
  constructor(private dataService: UserDataService) { }

  ngOnInit() {

    this.dataService.purchasedMovies.subscribe(
      m => {
        if (m) {
          this.movies = m.purchasedMovies.map(pm => {
            return {
              id: pm.id, posterUrl: pm.posterUrl, title: pm.title
            } as Movie;
          });

        }
      }
    );
  }

}

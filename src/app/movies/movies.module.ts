import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCardListComponent } from './movie-card-list/movie-card-list.component';
import { MoviePurchaseConfirmComponent } from './movie-purchase-confirm/movie-purchase-confirm.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieCardListComponent,
    MoviePurchaseConfirmComponent
  ],
  imports: [CommonModule, MoviesRoutingModule, SharedModule]
})
export class MoviesModule {}

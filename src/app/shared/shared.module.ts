import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotAuthorizedComponent } from "./components/not-authorized/not-authorized.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import {
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbTabsetModule,
  NgbAlertModule
} from "@ng-bootstrap/ng-bootstrap";
import { GenresComponent } from "../genres/genres.component";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NotAuthorizedComponent, NotFoundComponent, GenresComponent, MovieCardComponent, MovieListComponent, MovieCardComponent, FavoriteButtonComponent, SearchMoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTabsetModule,
    NgbTypeaheadModule
  ],
  exports: [
    NotAuthorizedComponent,
    NotFoundComponent,
    MovieCardComponent,
    FavoriteButtonComponent,
    SearchMoviesComponent,
    GenresComponent,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTabsetModule,
    NgbTypeaheadModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SharedModule {}

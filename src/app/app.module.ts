import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { NgbCarouselModule, NgbCollapseModule, NgbDropdownModule, NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { PurchasesComponent } from './account/purchases/purchases.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ReviewsComponent } from './account/reviews/reviews.component';
import { CreateMovieComponent } from './admin/movies/create-movie/create-movie.component';
import { UpdateMovieComponent } from './admin/movies/update-movie/update-movie.component';
import { CreateCastComponent } from './admin/movies/create-cast/create-cast.component';
import { CreateCrewComponent } from './admin/movies/create-crew/create-crew.component';
import { UsersListComponent } from './admin/users/users-list/users-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { HttpTokenInterceptor } from './core/interceptors/http-token.interceptor';
import { BuyButtonComponent } from './shared/components/buy-button/buy-button.component';
import { FavoriteButtonComponent } from './shared/components/favorite-button/favorite-button.component';
import { MovieCardListComponent } from './movies/movie-card-list/movie-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    LoginComponent,
    SignUpComponent,
    FavoritesComponent,
    PurchasesComponent,
    ProfileComponent,
    ReviewsComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
    CreateCastComponent,
    CreateCrewComponent,
    UsersListComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    HeaderComponent,
    MovieListComponent,
    BuyButtonComponent,
    FavoriteButtonComponent,
    MovieCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

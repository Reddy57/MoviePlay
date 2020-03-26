import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NgbCarouselModule, NgbCollapseModule, NgbDropdownModule, NgbModalModule, NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
import { HttpTokenInterceptor } from './core/interceptors/http-token.interceptor';
import { MoviesModule } from './movies/movies.module';
import { MoviePurchaseConfirmComponent } from './movies/movie-purchase-confirm/movie-purchase-confirm.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-right',
    // }),
    HttpClientModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    MoviesModule,
    SharedModule,
    CoreModule
  ],
  entryComponents: [MoviePurchaseConfirmComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from '../shared/components/movie-list/movie-list.component';
import { GenresComponent } from '../genres/genres.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCardListComponent } from './movie-card-list/movie-card-list.component';


const routes: Routes = [

  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      { path: 'toprated', component: MovieListComponent },
      { path: 'topgrossing', component: MovieListComponent },
      { path: 'genres/:id', component: MovieCardListComponent },
      { path: 'genres', component: GenresComponent },
      { path: ':id', component: MovieDetailsComponent },
      { path: 'cast/:id', component: MovieDetailsComponent },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

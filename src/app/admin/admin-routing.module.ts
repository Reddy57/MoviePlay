import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateCastComponent } from './movies/create-cast/create-cast.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivate: [AdminGuard],
        children: [
          { path: 'movie/create', component: CreateMovieComponent },
          { path: 'cast/create', component: CreateCastComponent },
          { path: 'users', component: UsersListComponent },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

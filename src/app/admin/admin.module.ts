import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { CreateCastComponent } from "./movies/create-cast/create-cast.component";
import { CreateMovieComponent } from "./movies/create-movie/create-movie.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UpdateMovieComponent } from "./movies/update-movie/update-movie.component";
import { CreateCrewComponent } from "./movies/create-crew/create-crew.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AdminComponent,
    CreateCastComponent,
    CreateMovieComponent,
    UsersListComponent,
    UpdateMovieComponent,
    CreateCrewComponent
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}

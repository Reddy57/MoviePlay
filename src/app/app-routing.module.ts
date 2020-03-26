import { PurchasesComponent } from "./account/purchases/purchases.component";
import { FavoritesComponent } from "./account/favorites/favorites.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { AuthenticationGuard } from "./core/guards/authentication.guard";
import { AdminGuard } from "./core/guards/admin.guard";
import { NotAuthorizedComponent } from "./shared/components/not-authorized/not-authorized.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then(mod => mod.AccountModule),
    canLoad: [AuthenticationGuard]
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(mod => mod.AdminModule),
    canLoad: [AdminGuard]
  },

  {
    path: "notauthorized",
    component: NotAuthorizedComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ReviewsComponent } from './reviews/reviews.component';



const routes: Routes = [
  {
    path: '', component: AccountComponent, canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'favorites', component: FavoritesComponent },
          { path: 'purchases', component: PurchasesComponent },
          { path: 'ratings', component: ReviewsComponent }
        ]

      }
    ]

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

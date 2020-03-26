import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [AccountComponent, FavoritesComponent, PurchasesComponent, ReviewsComponent, ProfileComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule

  ]
})
export class AccountModule { }

export interface Purchases {
  userId: number;
  purchasedMovies: PurchasedMovie[];
}

export interface PurchasedMovie {
  purchaseDateTime: Date;
  id: number;
  title: string;
  posterUrl: string;
  releaseDate: Date;
}

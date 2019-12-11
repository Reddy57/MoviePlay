import { Genre } from './genre';

export interface Movie {

  id: number;
  title: string;
  tagline: string;
  posterUrl: string;
  backdropUrl: string;
  releaseDate: Date;
  runTime: number;
  rating: number;
  price: number;
  genres: Genre[];
  isFavorite: boolean;
  isPurchased: boolean;

}

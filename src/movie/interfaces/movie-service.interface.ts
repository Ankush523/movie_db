import { Movie } from '../entities/movie.entity';

export interface MovieServiceInterface {
  findAll(): Promise<Movie[]>;
  findByGenre(genre: string): Promise<Movie[]>;
  rateMovie(id: number, rating: number): Promise<Movie>;
}

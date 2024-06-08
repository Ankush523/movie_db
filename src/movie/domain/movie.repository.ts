import { Movie } from './movie.entity';

export abstract class MovieRepository {
  abstract findAll(): Promise<Movie[]>;
  abstract findByGenre(genre: string): Promise<Movie[]>;
  abstract rateMovie(id: number, rating: number): Promise<Movie>;
}

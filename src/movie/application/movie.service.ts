import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../domain/movie.repository';
import { Movie } from '../domain/movie.entity';

@Injectable()
export class MovieService {
  constructor(private readonly movieRepository: MovieRepository) {}

  async getAllMovies(): Promise<Movie[]> {
    return this.movieRepository.findAll();
  }

  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    return this.movieRepository.findByGenre(genre);
  }

  async rateMovie(id: number, rating: number): Promise<Movie> {
    return this.movieRepository.rateMovie(id, rating);
  }
}

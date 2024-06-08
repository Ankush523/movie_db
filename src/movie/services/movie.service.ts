import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieRepository } from '../repository/movie.repository';
import { MovieServiceInterface } from '../interfaces/movie-service.interface';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MovieService implements MovieServiceInterface {
  constructor(
    @InjectRepository(MovieRepository)
    private readonly movieRepository: MovieRepository,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findByGenre(genre: string): Promise<Movie[]> {
    return this.movieRepository.find({ where: { genre } });
  }

  async rateMovie(id: number, rating: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    movie.rating = rating;
    return this.movieRepository.save(movie);
  }
}

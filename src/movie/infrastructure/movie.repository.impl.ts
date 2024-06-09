import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../domain/movie.entity';
import { MovieRepository } from '../domain/movie.repository';

@Injectable()
export class MovieRepositoryImpl extends MovieRepository {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {
    super();
  }

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findByGenre(genre: string): Promise<Movie[]> {
    return this.movieRepository.find({ where: { genre } });
  }

  async rateMovie(id: number, rating: number): Promise<Movie> {
    const movie = await this.movieRepository.findOneBy({ id });
    if (movie) {
      movie.rating = rating;
      await this.movieRepository.save(movie);
    }
    return movie;
  }

  async findAllSortedByRating(): Promise<Movie[]> {
    return this.movieRepository.find({ order: { rating: 'DESC' } }); // New method to find all movies sorted by rating
  }
}

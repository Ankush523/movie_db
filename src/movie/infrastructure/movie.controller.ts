import { Controller, Get, Param, Patch, Body, Query } from '@nestjs/common';
import { MovieService } from '../application/movie.service';
import { Movie } from '../domain/movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getAllMovies(): Promise<Movie[]> {
    return this.movieService.getAllMovies();
  }

  @Get('genre')
  async getMoviesByGenre(@Query('genre') genre: string): Promise<Movie[]> {
    return this.movieService.getMoviesByGenre(genre);
  }

  @Patch(':id/rate')
  async rateMovie(
    @Param('id') id: number,
    @Body('rating') rating: number,
  ): Promise<Movie> {
    return this.movieService.rateMovie(id, rating);
  }
}

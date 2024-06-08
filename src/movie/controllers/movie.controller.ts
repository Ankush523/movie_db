import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MovieService } from '../services/movie.service';
import { Movie } from '../entities/movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get('genre/:genre')
  findByGenre(@Param('genre') genre: string): Promise<Movie[]> {
    return this.movieService.findByGenre(genre);
  }

  @Post('rate/:id')
  rateMovie(
    @Param('id') id: number,
    @Body('rating') rating: number,
  ): Promise<Movie> {
    return this.movieService.rateMovie(id, rating);
  }
}

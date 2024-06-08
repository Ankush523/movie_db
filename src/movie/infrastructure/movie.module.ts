import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../application/movie.service';
import { MovieController } from './movie.controller';
import { MovieRepository } from '../domain/movie.repository';
import { MovieRepositoryImpl } from './movie.repository.impl';
import { Movie } from '../domain/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [
    MovieService,
    {
      provide: MovieRepository,
      useClass: MovieRepositoryImpl,
    },
  ],
})
export class MovieModule {}

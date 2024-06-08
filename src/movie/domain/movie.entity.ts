import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releaseDate: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @Column('decimal', { precision: 2, scale: 1, default: 0 })
  rating: number;
}

import { Expose, Type } from 'class-transformer';
import { Genre } from './genre.entity';
import { Platform } from './platform.entity';

export class Game {
  id: number;
  name?: string;
  @Expose({ name: 'background_image' })
  backgroundImage?: string;
  rating?: number;
  @Type(() => Platform)
  platforms?: Platform[];
  @Expose({ name: 'parent_platforms' })
  @Type(() => Platform)
  parentPlatforms?: Platform[];
  @Expose({ name: 'genres' })
  @Type(() => Genre)
  genres?: Genre[];
}

export class RawgGameResponse {
  count: number;
  next: string;
  previous: string;
  @Type(() => Game)
  results: Game[];
}

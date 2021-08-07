import { Expose } from 'class-transformer';

export class Genre {
  id: number;
  name?: string;
  slug?: string;
  @Expose({ name: 'games_count' })
  gamesCount?: number;
  @Expose({ name: 'image_background' })
  imageBackground?: string;
}

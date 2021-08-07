import { Expose, Type } from 'class-transformer';

export class PlatformDetails {
  id: number;
  name?: string;
  slug?: string;
  image?: string;
  @Expose({ name: 'year_end' })
  yearEnd?: number;
  @Expose({ name: 'year_start' })
  yearStart?: number;
  @Expose({ name: 'games_count' })
  gamesCount?: number;
  @Expose({ name: 'image_background' })
  imageBackground?: string;
}

export class Platform {
  @Type(() => PlatformDetails)
  platform: PlatformDetails;
  released_at?: string;
}

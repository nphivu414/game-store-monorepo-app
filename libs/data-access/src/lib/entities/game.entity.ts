import { Field, ObjectType, Float, Int } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';
import { EsrbRating } from './esrb-rating.entity';
import { Genre } from './genre.entity';
import { Platform } from './platform.entity';
import { Publisher } from './publisher.entity';
import { Screenshot } from './screenshot.entity';
import { Store } from './store.entity';
import { Tag } from './tag.entity';
import { Trailer } from './trailer.entity';

@ObjectType()
export class Game {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Expose({ name: 'description_raw' })
  @Field({ nullable: true })
  description?: string;

  @Expose({ name: 'background_image' })
  @Field({ nullable: true })
  backgroundImage?: string;

  @Expose({ name: 'background_image_additional' })
  @Field({ nullable: true })
  backgroundImageAdditional?: string;

  @Field({ nullable: true })
  get thumbnailImageAdditional(): string {
    const thumbnailImageUrl = this.backgroundImageAdditional?.replace('/media/', '/media/crop/600/400/') || '';
    return thumbnailImageUrl;
  }

  @Field({ nullable: true })
  get thumbnailImage(): string {
    const thumbnailImageUrl = this.backgroundImage?.replace('/media/', '/media/crop/600/400/') || '';
    return thumbnailImageUrl;
  }

  @Field((type) => Int, { nullable: true })
  metacritic: number;

  @Expose({ name: 'esrb_rating' })
  @Field((type) => EsrbRating, { nullable: true })
  esrbRating?: EsrbRating;

  @Field((type) => Float, { nullable: true })
  rating?: number;

  @Type(() => Platform)
  @Field((type) => [Platform], { nullable: true })
  platforms?: Platform[];

  @Expose({ name: 'parent_platforms' })
  @Type(() => Platform)
  @Field((type) => [Platform], { nullable: true })
  parentPlatforms?: Platform[];

  @Expose({ name: 'genres' })
  @Type(() => Genre)
  @Field((type) => [Genre], { nullable: true })
  genres?: Genre[];

  @Type(() => Publisher)
  @Field((type) => [Publisher], { nullable: true })
  publishers?: Publisher[];

  @Type(() => Store)
  @Field((type) => [Store], { nullable: true })
  stores?: Store[];

  @Type(() => Screenshot)
  @Field((type) => [Screenshot], { nullable: true })
  screenshots?: Screenshot[];

  @Type(() => Trailer)
  @Field((type) => [Trailer], { nullable: true })
  trailers?: Trailer[];

  @Type(() => Tag)
  @Field((type) => [Tag], { nullable: true })
  tags?: Tag[];
}

@ObjectType()
export class RawgGameResponse {
  @Field((type) => Int)
  count: number;

  private next?: string;

  @Field((type) => Int, { nullable: true })
  @Expose()
  get nextPage(): number | undefined {
    const urlSearchParams = new URLSearchParams(this.next);
    const pageParam = urlSearchParams.get('page');
    const page = pageParam ? parseInt(pageParam) : undefined;
    return page;
  }

  @Type(() => Game)
  @Field((type) => [Game])
  results: Game[];
}

@ObjectType()
export class GameExploreResponse {
  @Field((type) => RawgGameResponse)
  featureGames: RawgGameResponse;

  @Field((type) => RawgGameResponse)
  bestGames: RawgGameResponse;

  @Field((type) => RawgGameResponse)
  newReleaseGames: RawgGameResponse;

  @Field((type) => RawgGameResponse)
  upcomingGames: RawgGameResponse;
}

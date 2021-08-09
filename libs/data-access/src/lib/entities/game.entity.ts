import { Field, ObjectType, Float, Int } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';
import { EsrbRating } from './esrb-rating.entity';
import { Genre } from './genre.entity';
import { Platform } from './platform.entity';
import { Publisher } from './publisher.entity';
import { Store } from './store.entity';

@ObjectType()
export class Game {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Expose({ name: 'background_image' })
  @Field({ nullable: true })
  backgroundImage?: string;

  @Expose({ name: 'background_image_additional' })
  @Field({ nullable: true })
  backgroundImageAdditional?: string;

  @Field({ nullable: true })
  get thumbnailImage(): string {
    const thumbnailImageUrl = this.backgroundImage?.replace('/media/', '/media/crop/600/400/') || '';
    return thumbnailImageUrl;
  }

  @Field((type) => Int)
  metacritic: number;

  @Expose({ name: 'esrb_rating' })
  @Field((type) => EsrbRating, { nullable: true })
  esrbRating: EsrbRating;

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

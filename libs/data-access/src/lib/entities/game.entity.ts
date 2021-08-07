import { Field, ObjectType, Float, Int } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';
import { Genre } from './genre.entity';
import { Platform } from './platform.entity';

@ObjectType()
export class Game {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Expose({ name: 'background_image' })
  @Field({ nullable: true })
  backgroundImage?: string;

  @Field((type) => Float)
  rating?: number;

  @Type(() => Platform)
  @Field((type) => [Platform])
  platforms?: Platform[];

  @Expose({ name: 'parent_platforms' })
  @Type(() => Platform)
  @Field((type) => [Platform])
  parentPlatforms?: Platform[];

  @Expose({ name: 'genres' })
  @Type(() => Genre)
  @Field((type) => [Genre])
  genres?: Genre[];
}

export class RawgGameResponse {
  @Field((type) => Int)
  count: number;

  @Field({ nullable: true })
  next: string;

  @Field({ nullable: true })
  previous: string;

  @Type(() => Game)
  @Field((type) => [Game])
  results: Game[];
}

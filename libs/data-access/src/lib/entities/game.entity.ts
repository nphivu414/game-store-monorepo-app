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

  @Field({ nullable: true })
  get thumbnailImage(): string {
    const thumbnailImageUrl = this.backgroundImage?.replace('/media/', '/media/crop/600/400/') || '';
    return thumbnailImageUrl;
  }

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

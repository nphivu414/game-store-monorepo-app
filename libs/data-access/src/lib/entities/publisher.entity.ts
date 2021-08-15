import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';

@ObjectType()
export class Publisher {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Expose({ name: 'games_count' })
  @Field((type) => Int)
  gamesCount?: number;

  @Expose({ name: 'image_background' })
  @Field({ nullable: true })
  imageBackground?: string;

  @Field({ nullable: true })
  get thumbnailImage(): string {
    const thumbnailImageUrl = this.imageBackground?.replace('/media/', '/media/crop/600/400/') || '';
    return thumbnailImageUrl;
  }

  @Type(() => PublisherGame)
  @Field((type) => [PublisherGame])
  games: PublisherGame[];
}

@ObjectType()
export class PublisherGame {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name: string;
}

@ObjectType()
export class RawgPublisherResponse {
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

  @Type(() => Publisher)
  @Field((type) => [Publisher])
  results: Publisher[];
}

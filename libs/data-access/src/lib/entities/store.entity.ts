import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';

@ObjectType()
export class StoreDetails {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  domain?: string;

  @Expose({ name: 'games_count' })
  @Field((type) => Int)
  gamesCount?: number;

  @Expose({ name: 'image_background' })
  @Field({ nullable: true })
  imageBackground?: string;
}

@ObjectType()
export class Store {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  url?: string;

  @Type(() => StoreDetails)
  @Field((type) => StoreDetails)
  store: StoreDetails;
}

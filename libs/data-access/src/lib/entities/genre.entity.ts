import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Expose } from 'class-transformer';

@ObjectType()
export class Genre {
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
}

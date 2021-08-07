import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';

@ObjectType()
export class PlatformDetails {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;

  @Field({ nullable: true })
  image?: string;

  @Expose({ name: 'year_end' })
  @Field((type) => Int)
  yearEnd?: number;

  @Expose({ name: 'year_start' })
  @Field((type) => Int)
  yearStart?: number;

  @Expose({ name: 'games_count' })
  @Field((type) => Int)
  gamesCount?: number;

  @Expose({ name: 'image_background' })
  @Field({ nullable: true })
  imageBackground?: string;
}

@ObjectType()
export class Platform {
  @Type(() => PlatformDetails)
  @Field((type) => PlatformDetails)
  platform: PlatformDetails;

  @Field({ nullable: true })
  @Expose({ name: 'released_at' })
  releasedAt?: string;
}

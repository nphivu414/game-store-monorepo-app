import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';

@ObjectType()
export class TrailerDetails {
  @Expose({ name: '480' })
  @Field({ nullable: true })
  'thumbnail'?: string;

  @Field({ nullable: true })
  max?: string;
}

@ObjectType()
export class Trailer {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  preview?: string;

  @Type(() => TrailerDetails)
  @Field((type) => TrailerDetails)
  data: TrailerDetails;
}

@ObjectType()
export class RawgTrailerResponse {
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

  @Type(() => Trailer)
  @Field((type) => [Trailer])
  results: Trailer[];
}

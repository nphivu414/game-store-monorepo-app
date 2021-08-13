import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Expose, Type } from 'class-transformer';

@ObjectType()
export class Screenshot {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  image?: string;

  @Field((type) => Int, { nullable: true })
  width?: string;

  @Field((type) => Int, { nullable: true })
  height?: string;

  @Expose({ name: 'is_deleted' })
  @Field((type) => Boolean)
  isDeleted?: boolean;
}

@ObjectType()
export class RawgScreenshotResponse {
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

  @Type(() => Screenshot)
  @Field((type) => [Screenshot])
  results: Screenshot[];
}

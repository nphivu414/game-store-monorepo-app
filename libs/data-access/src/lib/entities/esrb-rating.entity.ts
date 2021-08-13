import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class EsrbRating {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  slug?: string;
}

import { Field, InputType, Int } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class NewBookInput {
  @Field()
  readonly title: string;

  @Field((type) => Int, { nullable: true })
  readonly pages?: number;

  @Field({ nullable: true })
  readonly authorId?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  readonly published?: Date;
}

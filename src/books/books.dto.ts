import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewBookInput {
  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  pages?: number;

  @Field({ nullable: true })
  authorId?: string;

  @Field({ nullable: true })
  published?: Date;
}

import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewBookInput {
  @Field()
  public title: string;

  @Field((type) => Int, { nullable: true })
  public pages?: number;

  @Field({ nullable: true })
  public authorId: string;
}

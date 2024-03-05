import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'book' })
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  pages?: number;

  @Field({ nullable: true })
  authorId?: string;

  @Field({ nullable: true })
  published?: Date;

  public static createDummy(): Book {
    const id = 'id_hoge';
    const title = 'aaa';
    const authorId = 'first_id';
    return { id, title, authorId } as Book;
  }
}

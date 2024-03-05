import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/authors/models/author.model';

@ObjectType({ description: 'book' })
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  pages: number;

  @Field({ nullable: true })
  authorId?: string;
}

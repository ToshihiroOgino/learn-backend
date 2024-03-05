import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/books/models/books.model';

@ObjectType({ description: 'book author' })
export class Author {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Book])
  books: Book[];
}

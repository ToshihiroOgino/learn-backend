import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Book } from './models/books.model';
import { BooksService } from './books.service';
import { NotFoundException } from '@nestjs/common';
import { NewBookInput } from './books.dto';
import { Author } from 'src/authors/models/author.model';
import { AuthorsService } from 'src/authors/author.service';

@Resolver(() => Book)
export class BooksResolver {
  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService,
  ) {}

  @Query(() => Book)
  async book(@Args('id') id: string): Promise<Book> {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Query(() => [Book])
  async allBooks(): Promise<[Book]> {
    const books = await this.booksService.getAll();
    return books;
  }

  @Mutation(() => Book)
  async addBook(@Args('newBookData') newBookData: NewBookInput): Promise<Book> {
    const book = await this.booksService.create(newBookData);
    return book;
  }

  @ResolveField('author', () => Author)
  async getAuthor(@Parent() book: Book) {
    const { authorId } = book;
    console.log(`getAuthor() ${authorId}`);
    const author = await this.authorsService.getOneById(authorId);
    return author;
  }
}

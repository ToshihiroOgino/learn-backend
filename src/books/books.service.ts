import { Injectable } from '@nestjs/common';
import { Book } from './models/books.model';
import { NewBookInput } from './books.dto';

@Injectable()
export class BooksService {
  private books: Array<Book>;

  constructor() {
    this.createDummy();
  }

  private createDummy() {
    const book = Book.createDummy();
    this.books = [book];
  }

  async create(data: NewBookInput): Promise<Book> {
    const id = Math.random().toString(36).substring(2);
    const title = data.title;
    const pages = data.pages;
    const book = { id, title } as Book;
    this.books.push(book);
    return book as any;
  }

  async findOneById(id: string): Promise<Book> {
    let book: Book = null;
    this.books.forEach((element) => {
      if (element.id == id) {
        book = element;
      }
    });
    return book;
  }

  async getAll(): Promise<[Book]> {
    return this.books as any;
  }
}

import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';
import { title } from 'process';
import { Book } from 'src/books/models/books.model';

@Injectable()
export class AuthorsService {
  private authors: Array<Author>;

  constructor() {
    this.createDummy();
  }

  private createDummy() {
    {
      const id = 'first_id';
      const name = 'huga';
      const books = [Book.createDummy()] as [Book];
      this.authors = [{ id, name, books } as Author];
    }
    {
      const id = 'second_id';
      const name = 'huga2';
      const books = [];
      this.authors.push({ id, name, books } as Author);
    }
  }

  async getOneById(id: string): Promise<Author> {
    let author: Author = null;
    this.authors.forEach((element) => {
      if (element.id == id) {
        author = element;
      }
    });
    return author;
  }

  async getAll(): Promise<[Author]> {
    return this.authors as [Author];
  }
}

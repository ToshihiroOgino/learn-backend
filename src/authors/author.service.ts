import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  private authors: Array<Author>;

  constructor() {
    const id = 'first_id';
    const name = 'huga';
    this.authors = [{ id, name } as Author];
  }

  async getOneById(id: string): Promise<Author> {
    const name = 'bbb';
    const books = [];
    return { id, name, books } as Author;
  }
}

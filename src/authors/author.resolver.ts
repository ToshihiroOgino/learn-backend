import { Args, Parent, Query, ResolveField, Resolver, ID } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { AuthorsService } from './author.service';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(() => Author)
  async author(@Args('id') id: string): Promise<Author> {
    const author = await this.authorsService.getOneById(id);
    if (!author) {
      throw new NotFoundException();
    }
    return author;
  }
}

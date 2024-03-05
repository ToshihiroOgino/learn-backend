import { Module } from '@nestjs/common';
import { AuthorsService } from './author.service';
import { AuthorsResolver } from './author.resolver';

@Module({
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}

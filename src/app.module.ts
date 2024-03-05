import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BooksModule } from './books/books.module';
import { join } from 'path';
import { AuthorsModule } from './authors/author.module';
import GraphQLJSON from 'graphql-type-json';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      resolvers: { JSON: GraphQLJSON },
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { GameResolver, GenreResolver, TagResolver } from './resolvers';
@Module({
  imports: [
    HttpModule,
    ConfigModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [GameResolver, GenreResolver, TagResolver],
})
export class AppModule {}

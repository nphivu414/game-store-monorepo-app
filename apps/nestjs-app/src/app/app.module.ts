import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameResolver } from './game.resolver'
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [AppController],
  providers: [AppService, GameResolver],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios'
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameResolver } from './game.resolver';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    HttpModule,
    ConfigModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [AppController],
  providers: [AppService, GameResolver],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GameResolver } from './game.resolver';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [GameResolver],
})
export class GamesModule {}

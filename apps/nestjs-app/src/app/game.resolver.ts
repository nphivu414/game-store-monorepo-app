import { Injectable, Logger } from '@nestjs/common';
import {HttpService} from '@nestjs/axios'
import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';
import { GameEntity, RawgGameResponse } from './types';
@Injectable()
@Resolver('Game')
export class GameResolver {
  constructor(private httpService: HttpService, private configService: ConfigService) {}
  private readonly logger = new Logger(GameResolver.name);
  host = this.configService.get<string>('RAWG_API_HOST');
  apiKey = this.configService.get<string>('RAWG_API_KEY');
  @Query('allGames')
  async getAllGames(): Promise<GameEntity[]> {
    const res = await this.httpService.get<RawgGameResponse>(`${this.host}/games?key=${this.apiKey}&page=1&page_size=2`).toPromise();
    return res.data.results;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GameEntity, RawgGameResponse } from '../entities';
import { plainToClass } from 'class-transformer';
import { stringifyQueryObject } from '../utils';

@Injectable()
@Resolver('Game')
export class GameResolver {
  constructor(private httpService: HttpService, private configService: ConfigService) {}
  private readonly logger = new Logger(GameResolver.name);
  host = this.configService.get<string>('RAWG_API_HOST');
  apiKey = this.configService.get<string>('RAWG_PUBLIC_API_KEY');

  @Query('allGames')
  async getAllGames(
    @Args('page') page: number,
    @Args('pageSize') pageSize: number,
    @Args('search') search: string,
    @Args('genres') genres: string,
    @Args('tags') tags: string,
    @Args('dates') dates: string,
    @Args('ordering') ordering: string,
  ): Promise<GameEntity[]> {
    const params = {
      key: this.apiKey,
      page,
      page_size: pageSize || 10,
      search,
      genres,
      tags,
      dates,
      ordering,
    };
    const res = await this.httpService
      .get<RawgGameResponse>(`${this.host}/games?${stringifyQueryObject(params)}`)
      .toPromise();
    const rawgResponse = plainToClass(RawgGameResponse, res.data);
    return rawgResponse.results;
  }
}

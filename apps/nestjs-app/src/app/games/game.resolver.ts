import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Game, RawgGameResponse, RawgScreenshotResponse, RawgTrailerResponse } from '@game-store-monorepo/data-access';
import { plainToClass } from 'class-transformer';
import { stringifyQueryObject } from '../utils';

@Injectable()
@Resolver(() => Game)
export class GameResolver {
  constructor(private httpService: HttpService, private configService: ConfigService) {}
  private readonly logger = new Logger(GameResolver.name);
  host = this.configService.get<string>('RAWG_API_HOST');
  apiKey = this.configService.get<string>('RAWG_PUBLIC_API_KEY');

  @Query(() => RawgGameResponse, {
    name: 'allGames',
  })
  async getAllGames(
    @Args('page', { nullable: true, type: () => Int }) page?: number,
    @Args('pageSize', { nullable: true, type: () => Int }) pageSize?: number,
    @Args('search', { nullable: true }) search?: string,
    @Args('genres', { nullable: true }) genres?: string,
    @Args('tags', { nullable: true }) tags?: string,
    @Args('dates', { nullable: true }) dates?: string,
    @Args('ordering', { nullable: true }) ordering?: string,
  ): Promise<RawgGameResponse> {
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
    this.logger.debug('getAllGames called with params', params);
    const res = await this.httpService
      .get<RawgGameResponse>(`${this.host}/games?${stringifyQueryObject(params)}`)
      .toPromise();
    const rawgResponse = plainToClass(RawgGameResponse, res.data);
    return rawgResponse;
  }

  @Query(() => Game, {
    name: 'gameDetails',
  })
  async getGameDetails(@Args('id', { type: () => Int }) id?: number): Promise<Game> {
    const params = {
      key: this.apiKey,
    };
    this.logger.debug('getGameDetails called with params', params);
    const detailRes = await this.httpService
      .get<Game>(`${this.host}/games/${id}?${stringifyQueryObject(params)}`)
      .toPromise();

    const mediaParams = {
      key: this.apiKey,
      pageSize: 5,
    };
    const screenshotRes = await this.httpService
      .get<RawgScreenshotResponse>(`${this.host}/games/${id}/screenshots?${stringifyQueryObject(mediaParams)}`)
      .toPromise();
    const trailerRes = await this.httpService
      .get<RawgTrailerResponse>(`${this.host}/games/${id}/movies?${stringifyQueryObject(mediaParams)}`)
      .toPromise();

    detailRes.data.screenshots = screenshotRes.data.results;
    detailRes.data.trailers = trailerRes.data.results;

    const gameDetailResponse = plainToClass(Game, detailRes.data);
    return gameDetailResponse;
  }
}

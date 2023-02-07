import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import {
  Game,
  GameExploreQueryResponse,
  GameExploreResponse,
  RawgGameResponse,
  RawgScreenshotResponse,
  RawgTrailerResponse,
} from '@root/data-access';
import { plainToClass } from 'class-transformer';
import { stringifyQueryObject } from '../utils';
import { lastValueFrom } from 'rxjs';

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
    @Args('dates', { nullable: true }) dates?: string,
    @Args('ordering', { nullable: true }) ordering?: string,
    @Args('tags', { nullable: true }) tags?: string,
    @Args('genres', { nullable: true }) genres?: string,
    @Args('publishers', { nullable: true }) publishers?: string,
    @Args('search', { nullable: true }) search?: string,
  ): Promise<RawgGameResponse> {
    const params = {
      key: this.apiKey,
      page,
      page_size: pageSize || 10,
      search,
      genres,
      tags,
      publishers,
      dates,
      ordering,
    };
    this.logger.debug('getAllGames called with params', params);
    const res = this.httpService.get<RawgGameResponse>(`${this.host}/games?${stringifyQueryObject(params)}`);
    const value = await lastValueFrom(res);
    const rawgResponse = plainToClass(RawgGameResponse, value.data);
    return rawgResponse;
  }

  @Query(() => RawgGameResponse, {
    name: 'searchGames',
  })
  async searchGames(
    @Args('page', { nullable: true, type: () => Int }) page?: number,
    @Args('pageSize', { nullable: true, type: () => Int }) pageSize?: number,
    @Args('search', { nullable: true }) search?: string,
  ): Promise<RawgGameResponse> {
    const params = {
      key: this.apiKey,
      page,
      page_size: pageSize || 10,
      search,
    };
    this.logger.debug('searchGames called with params', params);
    const res = this.httpService.get<RawgGameResponse>(`${this.host}/games?${stringifyQueryObject(params)}`);
    const value = await lastValueFrom(res);
    const rawgResponse = plainToClass(RawgGameResponse, value.data);
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
    const detailRes = this.httpService.get<Game>(`${this.host}/games/${id}?${stringifyQueryObject(params)}`);
    const detailValue = await lastValueFrom(detailRes);

    const mediaParams = {
      key: this.apiKey,
      pageSize: 5,
    };
    const screenshotRes = this.httpService.get<RawgScreenshotResponse>(
      `${this.host}/games/${id}/screenshots?${stringifyQueryObject(mediaParams)}`,
    );
    const screenshotValues = await lastValueFrom(screenshotRes);
    const trailerRes = this.httpService.get<RawgTrailerResponse>(
      `${this.host}/games/${id}/movies?${stringifyQueryObject(mediaParams)}`,
    );
    const trailerValues = await lastValueFrom(trailerRes);

    detailValue.data.screenshots = screenshotValues.data.results;
    detailValue.data.trailers = trailerValues.data.results;

    const gameDetailResponse = plainToClass(Game, detailValue.data);
    return gameDetailResponse;
  }

  @Query(() => RawgGameResponse, {
    name: 'gameSeries',
  })
  async getGameSeries(
    @Args('id', { type: () => Int }) id?: number,
    @Args('page', { nullable: true, type: () => Int }) page?: number,
    @Args('pageSize', { nullable: true, type: () => Int }) pageSize?: number,
  ): Promise<RawgGameResponse> {
    const params = {
      key: this.apiKey,
      page,
      page_size: pageSize || 10,
    };
    this.logger.debug('getGameSeries called with params', params);
    const res = this.httpService.get<RawgGameResponse>(
      `${this.host}/games/${id}/game-series?${stringifyQueryObject(params)}`,
    );
    const value = await lastValueFrom(res);
    const rawgResponse = plainToClass(RawgGameResponse, value.data);
    return rawgResponse;
  }

  @Query(() => GameExploreResponse, {
    name: 'exploreGames',
  })
  async getExploreGames(): Promise<GameExploreResponse> {
    const featureGameRes = this.httpService.get<RawgGameResponse>(
      `${this.host}/games?${stringifyQueryObject({
        key: this.apiKey,
        page_size: 5,
        dates: '2020-01-01,2020-12-31',
        ordering: '-added',
      })}`,
    );

    const bestGameRes = this.httpService.get<RawgGameResponse>(
      `${this.host}/games?${stringifyQueryObject({
        key: this.apiKey,
        page_size: 5,
        dates: '1990-01-01,2020-12-31',
        ordering: '-added',
      })}`,
    );

    const newReleaseGameRes = this.httpService.get<RawgGameResponse>(
      `${this.host}/games?${stringifyQueryObject({
        key: this.apiKey,
        page_size: 5,
        dates: '2021-01-31,2021-08-01',
        ordering: '-added',
      })}`,
    );

    const upcomingGameRes = this.httpService.get<RawgGameResponse>(
      `${this.host}/games?${stringifyQueryObject({
        key: this.apiKey,
        page_size: 5,
        dates: '2021-08-31,2021-12-31',
        ordering: '-added',
      })}`,
    );

    const [featureGameValue, bestGameValue, newReleaseGameValue, upcomingGameValue] = await Promise.all([
      lastValueFrom(featureGameRes),
      lastValueFrom(bestGameRes),
      lastValueFrom(newReleaseGameRes),
      lastValueFrom(upcomingGameRes),
    ]);

    return {
      featureGames: plainToClass(RawgGameResponse, featureGameValue.data),
      bestGames: plainToClass(RawgGameResponse, bestGameValue.data),
      newReleaseGames: plainToClass(RawgGameResponse, newReleaseGameValue.data),
      upcomingGames: plainToClass(RawgGameResponse, upcomingGameValue.data),
    };
  }
}

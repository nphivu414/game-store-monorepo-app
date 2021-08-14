import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Genre, RawgGenreResponse } from '@game-store-monorepo/data-access';
import { plainToClass } from 'class-transformer';
import { stringifyQueryObject } from '../utils';

@Injectable()
@Resolver(() => Genre)
export class GenreResolver {
  constructor(private httpService: HttpService, private configService: ConfigService) {}
  private readonly logger = new Logger(GenreResolver.name);
  host = this.configService.get<string>('RAWG_API_HOST');
  apiKey = this.configService.get<string>('RAWG_PUBLIC_API_KEY');

  @Query(() => RawgGenreResponse, {
    name: 'allGenres',
  })
  async getAllGenres(
    @Args('page', { nullable: true, type: () => Int }) page?: number,
    @Args('pageSize', { nullable: true, type: () => Int }) pageSize?: number,
    @Args('ordering', { nullable: true }) ordering?: string,
  ): Promise<RawgGenreResponse> {
    const params = {
      key: this.apiKey,
      page,
      page_size: pageSize || 10,
      ordering,
    };
    this.logger.debug('getAllGenres called with params', params);
    const res = await this.httpService
      .get<RawgGenreResponse>(`${this.host}/genres?${stringifyQueryObject(params)}`)
      .toPromise();
    const rawgResponse = plainToClass(RawgGenreResponse, res.data);
    return rawgResponse;
  }
}

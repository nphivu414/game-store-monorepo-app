import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Tag, RawgTagResponse } from '@game-store-monorepo/data-access';
import { plainToClass } from 'class-transformer';
import { stringifyQueryObject } from '../utils';

@Injectable()
@Resolver(() => Tag)
export class TagResolver {
  constructor(private httpService: HttpService, private configService: ConfigService) {}
  private readonly logger = new Logger(TagResolver.name);
  host = this.configService.get<string>('RAWG_API_HOST');
  apiKey = this.configService.get<string>('RAWG_PUBLIC_API_KEY');

  @Query(() => RawgTagResponse, {
    name: 'allTags',
  })
  async getAllTags(
    @Args('page', { nullable: true, type: () => Int }) page?: number,
    @Args('pageSize', { nullable: true, type: () => Int }) pageSize?: number,
    @Args('ordering', { nullable: true }) ordering?: string,
  ): Promise<RawgTagResponse> {
    const params = {
      key: this.apiKey,
      page,
      page_size: pageSize || 10,
      ordering,
    };
    this.logger.debug('getAllTags called with params', params);
    const res = await this.httpService
      .get<RawgTagResponse>(`${this.host}/tags?${stringifyQueryObject(params)}`)
      .toPromise();
    const rawgResponse = plainToClass(RawgTagResponse, res.data);
    return rawgResponse;
  }
}

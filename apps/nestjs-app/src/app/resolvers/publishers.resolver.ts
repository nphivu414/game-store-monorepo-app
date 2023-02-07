import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Publisher, RawgPublisherResponse } from '@root/data-access';
import { plainToClass } from 'class-transformer';
import { stringifyQueryObject } from '../utils';
import { lastValueFrom } from 'rxjs';

@Injectable()
@Resolver(() => Publisher)
export class PublisherResolver {
  constructor(private httpService: HttpService, private configService: ConfigService) {}
  private readonly logger = new Logger(PublisherResolver.name);
  host = this.configService.get<string>('RAWG_API_HOST');
  apiKey = this.configService.get<string>('RAWG_PUBLIC_API_KEY');

  @Query(() => RawgPublisherResponse, {
    name: 'allPublishers',
  })
  async getAllPublishers(
    @Args('page', { nullable: true, type: () => Int }) page?: number,
    @Args('pageSize', { nullable: true, type: () => Int }) pageSize?: number,
    @Args('ordering', { nullable: true }) ordering?: string,
  ): Promise<RawgPublisherResponse> {
    const params = {
      key: this.apiKey,
      page,
      page_size: pageSize || 10,
      ordering,
    };
    this.logger.debug('getAllPublishers called with params', params);
    const res = this.httpService.get<RawgPublisherResponse>(`${this.host}/publishers?${stringifyQueryObject(params)}`);
    const value = await lastValueFrom(res);
    const rawgResponse = plainToClass(RawgPublisherResponse, value.data);
    return rawgResponse;
  }
}

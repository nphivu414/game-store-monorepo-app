import { RawgGameResponse } from '../entities';

export type GamesQueryResponse = {
  allGames: RawgGameResponse;
};

export type GamesQueryParams = {
  variables: {
    page?: number;
    pageSize?: number;
    dates?: string;
    ordering?: string;
  };
};

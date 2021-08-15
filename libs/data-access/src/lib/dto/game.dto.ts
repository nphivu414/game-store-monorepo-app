import { Game, RawgGameResponse } from '../entities';

export type GamesQueryResponse = {
  allGames: RawgGameResponse;
};

export type GamesQueryParams = {
  variables: {
    page?: number;
    pageSize?: number;
    dates?: string;
    ordering?: string;
    tags?: string;
    genres?: string;
    publishers?: string;
  };
};

export type GameDetailsQueryResponse = {
  gameDetails: Game;
};

export type GameDetailsQueryParams = {
  variables: {
    id: number;
  };
};

export type GameSeriesQueryParams = {
  variables: {
    id: number;
    page?: number;
    pageSize?: number;
  };
};

export type GameSeriesQueryResponse = {
  gameSeries: RawgGameResponse;
};

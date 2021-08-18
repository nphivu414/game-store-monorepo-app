import { Game, RawgGameResponse } from '../entities';

export type GamesQueryResponse = {
  allGames: RawgGameResponse;
};

export type SearchGamesQueryResponse = {
  searchGames: RawgGameResponse;
};

export type GamesQueryParams = {
  variables: {
    page?: number | null;
    pageSize?: number | null;
    dates?: string | null;
    ordering?: string | null;
    tags?: string | null;
    genres?: string | null;
    publishers?: string | null;
    search?: string | null;
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

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

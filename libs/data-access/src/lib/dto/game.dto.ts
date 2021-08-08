import { Game } from '../entities';

export type GamesQueryResponse = {
  allGames: Game[];
};

export type GamesQueryParams = {
  variables: {
    pageSize?: number;
    dates?: string;
    ordering?: string;
  };
};

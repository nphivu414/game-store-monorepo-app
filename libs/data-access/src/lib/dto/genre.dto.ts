import { RawgGenreResponse } from '../entities';

export type GenresQueryResponse = {
  allGenres: RawgGenreResponse;
};

export type GenresQueryParams = {
  variables: {
    page?: number;
    pageSize?: number;
    ordering?: string;
  };
};

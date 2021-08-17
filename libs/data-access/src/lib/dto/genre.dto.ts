import { RawgGenreResponse } from '../entities';

export type GenresQueryResponse = {
  allGenres: RawgGenreResponse;
};

export type GenresQueryParams = {
  variables: {
    page?: number | null;
    pageSize?: number | null;
    ordering?: string | null;
  };
};

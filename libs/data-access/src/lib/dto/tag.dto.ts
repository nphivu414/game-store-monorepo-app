import { RawgTagResponse } from '../entities';

export type TagsQueryResponse = {
  allTags: RawgTagResponse;
};

export type TagsQueryParams = {
  variables: {
    page?: number | null;
    pageSize?: number | null;
    ordering?: string | null;
  };
};

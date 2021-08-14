import { RawgTagResponse } from '../entities';

export type TagsQueryResponse = {
  allTags: RawgTagResponse;
};

export type TagsQueryParams = {
  variables: {
    page?: number;
    pageSize?: number;
    ordering?: string;
  };
};

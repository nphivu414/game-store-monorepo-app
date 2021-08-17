import { RawgPublisherResponse } from '../entities';

export type PublishersQueryResponse = {
  allPublishers: RawgPublisherResponse;
};

export type PublishersQueryParams = {
  variables: {
    page?: number | null;
    pageSize?: number | null;
    ordering?: string | null;
  };
};

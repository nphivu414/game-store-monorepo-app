import { RawgPublisherResponse } from '../entities';

export type PublishersQueryResponse = {
  allPublishers: RawgPublisherResponse;
};

export type PublishersQueryParams = {
  variables: {
    page?: number;
    pageSize?: number;
    ordering?: string;
  };
};

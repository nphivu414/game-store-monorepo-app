import {
  ApolloClient,
  ApolloClientOptions,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import {
  RawgGameResponse,
  RawgGenreResponse,
  RawgPublisherResponse,
  RawgTagResponse,
} from '@game-store-monorepo/data-access';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('networkError', networkError);
  console.log('graphQLErrors', graphQLErrors);
});

const httpLink = new HttpLink({
  uri: process.env['NX_API_URL'],
});

const handleQueryMergeResult = <T,>(existing: T, incoming: T): T => {
  if (!existing) {
    return incoming;
  }
  return {
    ...existing,
    nextPage: incoming['nextPage'],
    results: [...existing['results'], ...incoming['results']],
  };
};

const defaultOptions: ApolloClientOptions<NormalizedCacheObject> = {
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allGames: {
            keyArgs: ['dates', 'pageSize', 'tags', 'genres', 'publishers', 'ordering', 'search'],
            merge(existing: RawgGameResponse, incoming: RawgGameResponse): RawgGameResponse {
              return handleQueryMergeResult<RawgGameResponse>(existing, incoming);
            },
          },
          gameSeries: {
            keyArgs: ['id'],
            merge(existing: RawgGameResponse, incoming: RawgGameResponse): RawgGameResponse {
              return handleQueryMergeResult<RawgGameResponse>(existing, incoming);
            },
          },
          allGenres: {
            keyArgs: ['pageSize', 'ordering'],
            merge(existing: RawgGenreResponse, incoming: RawgGenreResponse): RawgGenreResponse {
              return handleQueryMergeResult<RawgGenreResponse>(existing, incoming);
            },
          },
          allTags: {
            keyArgs: ['pageSize', 'ordering'],
            merge(existing: RawgTagResponse, incoming: RawgTagResponse): RawgTagResponse {
              return handleQueryMergeResult<RawgTagResponse>(existing, incoming);
            },
          },
          allPublishers: {
            keyArgs: ['pageSize', 'ordering'],
            merge(existing: RawgPublisherResponse, incoming: RawgPublisherResponse): RawgPublisherResponse {
              return handleQueryMergeResult<RawgPublisherResponse>(existing, incoming);
            },
          },
        },
      },
    },
  }),
};

export const getApolloClient = (options: Partial<ApolloClientOptions<NormalizedCacheObject>>) => {
  return new ApolloClient({
    ...defaultOptions,
    ...options,
  });
};

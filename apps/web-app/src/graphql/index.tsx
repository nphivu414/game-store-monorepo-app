import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RawgGameResponse, RawgGenreResponse, RawgTagResponse } from '@game-store-monorepo/data-access';
import { toastError } from 'src/components/Toast';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  toastError({
    content: (
      <div>
        {networkError && <p className="font-bold text-sm mb-2">{networkError.message}</p>}
        <ul>
          {graphQLErrors?.map(({ message }) => {
            return <li className="text-sm text-gray-300">{message}</li>;
          })}
        </ul>
      </div>
    ),
  });
});

const httpLink = new HttpLink({
  uri: process.env.NX_API_URL,
});

const handleQueryMergeResult = <T1,>(existing: T1, incoming: T1): T1 => {
  if (!existing) {
    return incoming;
  }
  return {
    ...existing,
    nextPage: incoming['nextPage'],
    results: [...existing['results'], ...incoming['results']],
  };
};

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allGames: {
            keyArgs: ['dates', 'pageSize', 'tags', 'genres', 'ordering'],
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
        },
      },
    },
  }),
});

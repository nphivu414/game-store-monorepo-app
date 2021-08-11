import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RawgGameResponse } from '@game-store-monorepo/data-access';
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

const handleQueryMergeResult = (existing: RawgGameResponse, incoming: RawgGameResponse): RawgGameResponse => {
  if (!existing) {
    return incoming;
  }
  return {
    ...existing,
    nextPage: incoming.nextPage,
    results: [...existing.results, ...incoming.results],
  };
};

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allGames: {
            keyArgs: ['dates', 'pageSize', 'tags', 'genres'],
            merge(existing: RawgGameResponse, incoming: RawgGameResponse): RawgGameResponse {
              return handleQueryMergeResult(existing, incoming);
            },
          },
          gameSeries: {
            keyArgs: ['id'],
            merge(existing: RawgGameResponse, incoming: RawgGameResponse): RawgGameResponse {
              return handleQueryMergeResult(existing, incoming);
            },
          },
        },
      },
    },
  }),
});

import { from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { getApolloClient } from '@game-store-monorepo/graphql-client';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ errorLink ~ networkError', networkError);
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ errorLink ~ graphQLErrors', graphQLErrors);
});

const httpLink = new HttpLink({
  uri: process.env.NX_API_URL || 'http://localhost:3333/graphql',
});

export const client = getApolloClient({
  link: from([errorLink, httpLink]),
});

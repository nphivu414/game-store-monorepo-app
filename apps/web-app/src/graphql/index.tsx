import { from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { getApolloClient } from '@game-store-monorepo/graphql-client';
import { toastError } from '@game-store-monorepo/ui-web';

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

export const client = getApolloClient({
  link: from([errorLink, httpLink]),
});

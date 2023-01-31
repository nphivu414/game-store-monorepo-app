import { from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { getApolloClient } from '@root/graphql-client';
import { toastError } from '@root/ui-web';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  toastError({
    content: (
      <div>
        {networkError && <p className="font-bold text-sm mb-2">{networkError.message}</p>}
        <ul>
          {graphQLErrors?.map(({ message }, index) => {
            return (
              <li key={index} className="text-sm text-gray-300">
                {message}
              </li>
            );
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

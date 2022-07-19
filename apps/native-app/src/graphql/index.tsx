import { from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { getApolloClient } from '@game-store-monorepo/graphql-client';
import { Platform } from 'react-native';
import { NX_API_ANDROID_URL, NX_API_IOS_URL } from '../configs';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ errorLink ~ networkError', networkError);
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ errorLink ~ graphQLErrors', graphQLErrors);
});

const httpLink = new HttpLink({
  uri: Platform.OS === 'android' ? NX_API_ANDROID_URL : NX_API_IOS_URL,
});

export const client = getApolloClient({
  link: from([errorLink, httpLink]),
});

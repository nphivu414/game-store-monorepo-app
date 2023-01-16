import { from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { getApolloClient } from '@root/graphql-client';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import { NX_API_ANDROID_URL, NX_API_IOS_URL } from '../configs';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  Toast.show({
    type: 'error',
    text1: networkError.message,
    text2: graphQLErrors
      ?.map(({ message }) => {
        return message;
      })
      .join(','),
  });
});

const httpLink = new HttpLink({
  uri: Platform.OS === 'android' ? NX_API_ANDROID_URL : NX_API_IOS_URL,
});

export const client = getApolloClient({
  link: from([errorLink, httpLink]),
});

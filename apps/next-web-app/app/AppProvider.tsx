'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql';

const AppProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppProvider;

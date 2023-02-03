import { GraphQLClient } from 'graphql-request';
// ... or create a GraphQL client instance to send requests
export const graphqlRequestClient = new GraphQLClient(process.env['NX_API_URL'] || 'http://localhost:3333/graphql', {
  headers: {},
});

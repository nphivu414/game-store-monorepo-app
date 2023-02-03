import { GameExploreQueryResponse } from '@root/data-access';
import { GET_EXPLORE_GAMES, graphqlRequestClient } from '@root/graphql-client';
import HomePage from './HomePage';

/**
 * A workaround to get the data from the server side using graphql-request
 * since the Apollo client is not working well with NextJS 13's server components.
 * Github issue: https://github.com/apollographql/apollo-client/issues/10344
 */
async function getExploreGames() {
  const data = await graphqlRequestClient.request<GameExploreQueryResponse>(GET_EXPLORE_GAMES);
  return data.exploreGames;
}
const Page = async () => {
  const exploreGames = await getExploreGames();
  return <HomePage exploreGames={exploreGames} />;
};

export default Page;

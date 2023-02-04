import { GamesQueryResponse } from '@root/data-access';
import { GET_GAMES, graphqlRequestClient } from '@root/graphql-client';
import GamePage from './GamePage';

/**
 * A workaround to get the data from the server side using graphql-request
 * since the Apollo client is not working well with NextJS 13's server components.
 * Github issue: https://github.com/apollographql/apollo-client/issues/10344
 */
async function getAllGames() {
  const { allGames } = await graphqlRequestClient.request<GamesQueryResponse>(GET_GAMES);
  return {
    results: allGames.results,
    nextPage: allGames.nextPage,
    hasMore: allGames.nextPage ? true : false,
  };
}
const Page = async () => {
  const { results, hasMore, nextPage } = await getAllGames();
  return <GamePage initialData={results} initialHasMore={hasMore} initialNextPage={nextPage} />;
};

export default Page;

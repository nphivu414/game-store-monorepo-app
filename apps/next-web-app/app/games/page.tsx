import { GamesQueryParams, GamesQueryResponse } from '@root/data-access';
import { GET_GAMES, graphqlRequestClient } from '@root/graphql-client';
import GamePage from './GamePage';

/**
 * A workaround to get the data from the server side using graphql-request
 * since the Apollo client is not working well with NextJS 13's server components.
 * Github issue: https://github.com/apollographql/apollo-client/issues/10344
 */
async function getAllGames(params: GamesQueryParams) {
  const { allGames } = await graphqlRequestClient.request<GamesQueryResponse>(GET_GAMES, params.variables);
  return {
    results: allGames.results,
    nextPage: allGames.nextPage,
    hasMore: allGames.nextPage ? true : false,
  };
}

type PageProps = {
  searchParams?: { [key: string]: string | undefined };
};

const Page = async ({ searchParams }: PageProps) => {
  const queryParams = {
    variables: {
      page: 1,
      pageSize: 10,
      dates: searchParams.dates,
      ordering: searchParams.ordering,
      genres: searchParams.genres,
      tags: searchParams.tags,
      publishers: searchParams.publishers,
      search: searchParams.search,
    },
  };

  const { results, hasMore, nextPage } = await getAllGames(queryParams);
  return <GamePage initialData={results} initialHasMore={hasMore} initialNextPage={nextPage} />;
};

export default Page;

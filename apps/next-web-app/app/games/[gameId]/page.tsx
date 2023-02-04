import { GameDetailsQueryResponse } from '@root/data-access';
import { GET_GAME_DETAILS, graphqlRequestClient } from '@root/graphql-client';
import GameDetailPage from './GameDetailPage';

/**
 * A workaround to get the data from the server side using graphql-request
 * since the Apollo client is not working well with NextJS 13's server components.
 * Github issue: https://github.com/apollographql/apollo-client/issues/10344
 */
async function getGameDetails(gameId: number) {
  const { gameDetails } = await graphqlRequestClient.request<GameDetailsQueryResponse>(GET_GAME_DETAILS, {
    id: gameId,
  });
  return {
    data: gameDetails,
  };
}

type PageProps = {
  params: {
    gameId: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const gameId = parseInt(params.gameId);
  const { data } = await getGameDetails(gameId);
  return <GameDetailPage data={data} />;
};

export default Page;

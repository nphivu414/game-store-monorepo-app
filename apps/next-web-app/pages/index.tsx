import { GameExploreQueryResponse } from '@root/data-access';
import { GET_EXPLORE_GAMES } from '@root/graphql-client';
import * as React from 'react';
import { BestGames, FeaturedGames, HighlightedTab } from '../components';
import { NavigationContext } from '../context/navigation';
import { client } from '../graphql';

export const getServerSideProps = async () => {
  const { data } = await client.query<GameExploreQueryResponse>({
    query: GET_EXPLORE_GAMES,
  });

  return {
    props: {
      exploreGames: data.exploreGames,
    },
  };
};

type IndexProps = GameExploreQueryResponse;

const Index = ({ exploreGames }: IndexProps) => {
  const { setTitle } = React.useContext(NavigationContext);

  React.useEffect(() => {
    setTitle('Explore');
  }, [setTitle]);

  return (
    <div className="p-4">
      <FeaturedGames data={exploreGames.featureGames} />
      <BestGames data={exploreGames.bestGames} />
      <HighlightedTab />
    </div>
  );
};

export default Index;

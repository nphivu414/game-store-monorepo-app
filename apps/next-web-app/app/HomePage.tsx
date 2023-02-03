'use client';

import { GameExploreQueryResponse } from '@root/data-access';
import React from 'react';
import { BestGames, FeaturedGames, HighlightedTab } from '../components';
import { NavigationContext } from '../context/navigation';

type PageIndexProps = GameExploreQueryResponse;

const HomePage = ({ exploreGames }: PageIndexProps) => {
  const { setTitle } = React.useContext(NavigationContext);

  React.useEffect(() => {
    setTitle('Explore');
  }, [setTitle]);

  return (
    <div className="p-4">
      <FeaturedGames data={exploreGames.featureGames} />
      <BestGames data={exploreGames.bestGames} />
      <HighlightedTab newReleaseGamedata={exploreGames.newReleaseGames} upcomingGameData={exploreGames.upcomingGames} />
    </div>
  );
};

export default HomePage;

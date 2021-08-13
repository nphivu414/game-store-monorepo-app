import * as React from 'react';
import { GamesQueryParams } from '@game-store-monorepo/data-access';
import GameCarousel from 'src/components/common/GameCarousel';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2020-01-01,2020-12-31',
    ordering: '-added',
  },
};

const FeaturedGames: React.FC = () => {
  return <GameCarousel queryParams={queryParams} className="carousel-center mb-6" itemClassName="w-4/5" />;
};

export default FeaturedGames;

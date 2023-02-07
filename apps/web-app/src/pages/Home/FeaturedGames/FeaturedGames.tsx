import React from 'react';
import { GamesQueryParams } from '@root/data-access';
import GameCarousel from '../../../components/GameCarousel/GameCarousel';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2020-01-01,2020-12-31',
    ordering: '-added',
  },
};

const FeaturedGames: React.FC = () => {
  return <GameCarousel queryParams={queryParams} className="carousel-center mb-6" itemSize="large" />;
};

export default FeaturedGames;

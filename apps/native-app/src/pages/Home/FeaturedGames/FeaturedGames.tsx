import React from 'react';
import { GamesQueryParams } from '@game-store-monorepo/data-access';
import { GameCarousel } from '@game-store-monorepo/ui-native';
import { carouselStyles } from '../styles';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2020-01-01,2020-12-31',
    ordering: '-added',
  },
};

const FeaturedGames: React.FC = () => {
  return <GameCarousel queryParams={queryParams} contentContainerStyle={carouselStyles.listContentContainerStyle} />;
};

export default FeaturedGames;

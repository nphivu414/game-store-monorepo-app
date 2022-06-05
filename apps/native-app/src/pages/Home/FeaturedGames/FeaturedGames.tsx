import React from 'react';
import { GamesQueryParams } from '@game-store-monorepo/data-access';
import { carouselStyles } from '../styles';
import { GameCarousel } from 'src/components';
import { Box } from '@game-store-monorepo/ui-native';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2020-01-01,2020-12-31',
    ordering: '-added',
  },
};

const FeaturedGames: React.FC = () => {
  return (
    <Box marginTop={15}>
      <GameCarousel queryParams={queryParams} contentContainerStyle={carouselStyles.listContentContainerStyle} />
    </Box>
  );
};

export default FeaturedGames;

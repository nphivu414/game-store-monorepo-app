import React from 'react';
import { GamesQueryParams } from '@game-store-monorepo/data-access';
import { StyledGameCarousel } from '../styles';
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
      <StyledGameCarousel queryParams={queryParams} />
    </Box>
  );
};

export default FeaturedGames;

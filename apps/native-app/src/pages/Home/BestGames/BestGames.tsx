import React from 'react';
import { GamesQueryParams } from '@game-store-monorepo/data-access';
import { Box, Section } from '@game-store-monorepo/ui-native';
import { Dimensions } from 'react-native';
import { StyledGameCarousel } from '../styles';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 6,
    dates: '1990-01-01,2020-12-31',
    ordering: '-added',
  },
};

const ITEM_WIDTH = Dimensions.get('screen').width / 2;
const ITEM_HEIGHT = 250;

const BestGames: React.FC = () => {
  const onSeeAllButtonClick = () => {};

  return (
    <Box marginTop={15}>
      <Section title="Best Of All Time" actionButtonText="See all" onButtonActionPressed={onSeeAllButtonClick}>
        <StyledGameCarousel queryParams={queryParams} width={ITEM_WIDTH} height={ITEM_HEIGHT} />
      </Section>
    </Box>
  );
};

export default BestGames;

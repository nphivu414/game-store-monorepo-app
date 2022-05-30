import React from 'react';
import { useQuery } from '@apollo/client';
import { Box } from '../Box';
import { Game, GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { GET_GAMES } from '@game-store-monorepo/graphql-client';
import { FlatListProps } from 'react-native';

type GameCarouselProps = {
  queryParams?: GamesQueryParams;
} & Partial<FlatListProps<Game>>;

const GameCarousel = ({ queryParams, ...rest }: GameCarouselProps) => {
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, {});
  console.log('🚀 ~ file: GameCarousel.tsx ~ line 14 ~ GameCarousel ~ data', data);
  return <Box></Box>;
};

export default GameCarousel;

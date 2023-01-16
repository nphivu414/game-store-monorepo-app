import React from 'react';
import { useQuery } from '@apollo/client';
import { Game, GamesQueryParams, GamesQueryResponse } from '@root/data-access';
import { GET_GAMES } from '@root/graphql-client';
import { Dimensions, FlatListProps, ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LoadingIndicator } from '@root/ui-native';
import { GameCard } from '../GameCard';

type GameCarouselProps = {
  queryParams?: GamesQueryParams;
  width?: number;
  height?: number;
} & Partial<FlatListProps<Game>>;

const ITEM_WIDTH = Dimensions.get('screen').width / 1.5;
const ITEM_HEIGHT = 250;

export const GameCarousel = ({ queryParams, width = ITEM_WIDTH, height = ITEM_HEIGHT, ...rest }: GameCarouselProps) => {
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);

  const renderItem = React.useCallback(
    ({ item }: ListRenderItemInfo<Game>) => {
      return <GameCard data={item} width={width} height={height} />;
    },
    [height, width],
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!data) {
    return null;
  }

  const {
    allGames: { results },
  } = data;

  return (
    <FlatList<Game>
      horizontal
      data={results}
      renderItem={renderItem}
      keyExtractor={({ id }) => id.toString()}
      getItemLayout={(_, index) => ({ length: height, offset: height * index, index })}
      {...rest}
    />
  );
};

import React from 'react';
import { useQuery } from '@apollo/client';
import { Game, GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { GET_GAMES } from '@game-store-monorepo/graphql-client';
import { getMultipleItemNames } from '@game-store-monorepo/util';
import { Dimensions, FlatListProps, ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card } from '@rneui/themed';
import { Box, Text, LoadingIndicator, PlatformLogos } from '@game-store-monorepo/ui-native';
import { StyledGameCard } from './styles';

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
    ({ item: { thumbnailImage, name, genres, parentPlatforms } }: ListRenderItemInfo<Game>) => {
      return (
        <StyledGameCard width={width} height={height}>
          <Card.Image
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            source={{
              uri: thumbnailImage,
            }}
          />
          <Box padding={10}>
            <Card.FeaturedTitle numberOfLines={1}>
              <Text fontSize={16}>{name}</Text>
            </Card.FeaturedTitle>
            <PlatformLogos data={parentPlatforms} marginBottom={10} />
            <Card.FeaturedSubtitle numberOfLines={1}>
              <Text>{getMultipleItemNames(genres, 3)}</Text>
            </Card.FeaturedSubtitle>
          </Box>
        </StyledGameCard>
      );
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

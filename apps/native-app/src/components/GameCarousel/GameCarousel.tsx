import React from 'react';
import { useQuery } from '@apollo/client';
import { Game, GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { GET_GAMES } from '@game-store-monorepo/graphql-client';
import { getMultipleItemNames } from '@game-store-monorepo/util';
import { Dimensions, FlatListProps, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LoadingIndicator from '../LoadingIndicator';
import { Card, Text } from '@rneui/themed';
import useThemeColors from '../../theme';
import { Box } from '../Box';

type GameCarouselProps = {
  queryParams?: GamesQueryParams;
  width?: number;
  height?: number;
} & Partial<FlatListProps<Game>>;

const ITEM_WIDTH = Dimensions.get('screen').width / 1.5;
const ITEM_HEIGHT = 250;

const GameCarousel = ({ queryParams, width = ITEM_WIDTH, height = ITEM_HEIGHT }: GameCarouselProps) => {
  const { grey5 } = useThemeColors();
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);
  const cardContainerStyle = React.useMemo((): StyleProp<ViewStyle> => {
    return {
      width,
      height,
      backgroundColor: grey5,
      padding: 0,
      borderWidth: 0,
      borderRadius: 10,
    };
  }, [grey5, height, width]);

  const handleRenderItem = React.useCallback(
    ({ item: { thumbnailImage, name, genres } }: ListRenderItemInfo<Game>) => {
      return (
        <Card containerStyle={cardContainerStyle}>
          <Card.Image
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            source={{
              uri: thumbnailImage,
            }}
          />
          <Box padding={10}>
            <Card.FeaturedTitle>
              <Text>{name}</Text>
            </Card.FeaturedTitle>
            <Card.FeaturedSubtitle>
              <Text>{getMultipleItemNames(genres, 3)}</Text>
            </Card.FeaturedSubtitle>
          </Box>
        </Card>
      );
    },
    [cardContainerStyle],
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
      centerContent
      snapToAlignment="center"
      horizontal
      pagingEnabled
      data={results}
      renderItem={handleRenderItem}
      keyExtractor={({ id }) => id.toString()}
      getItemLayout={(_, index) => ({ length: height, offset: height * index, index })}
    />
  );
};

export default GameCarousel;

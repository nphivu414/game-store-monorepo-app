import React from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Game, GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { useQuery } from '@apollo/client';
import { GET_GAMES } from '@game-store-monorepo/graphql-client';
import { GameCard } from 'src/components/GameCard';
import { StyledSeparator } from './styles';
import { LoadingIndicator } from '@game-store-monorepo/ui-native';

const ITEM_WIDTH = Dimensions.get('screen').width / 2 - 20;
const ITEM_HEIGHT = 250;

const GameList = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // search bar options
      },
    });
  }, [navigation]);

  const queryParams: GamesQueryParams = React.useMemo(() => {
    return {
      variables: {
        page: 1,
        pageSize: 10,
      },
    };
  }, []);

  const { data, loading, fetchMore } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);
  const results = data?.allGames.results;
  const nextPage = data?.allGames.nextPage;
  const hasMore = nextPage ? true : false;

  const renderItem = React.useCallback(({ item }: ListRenderItemInfo<Game>) => {
    return <GameCard data={item} width={ITEM_WIDTH} height={ITEM_HEIGHT} />;
  }, []);

  const handleFetchMore = React.useCallback(() => {
    if (!hasMore) {
      return;
    }
    fetchMore({
      variables: {
        page: nextPage,
      },
    });
  }, [fetchMore, hasMore, nextPage]);

  return (
    <FlatList<Game>
      contentInsetAdjustmentBehavior="automatic"
      numColumns={2}
      data={results}
      keyExtractor={({ id }) => id.toString()}
      renderItem={renderItem}
      onEndReached={handleFetchMore}
      getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
      ItemSeparatorComponent={StyledSeparator}
      ListFooterComponent={LoadingIndicator}
      ListFooterComponentStyle={{
        paddingVertical: 10,
      }}
      contentContainerStyle={{
        padding: 10,
      }}
    />
  );
};

export default GameList;

import React from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { Game, GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { useQuery, NetworkStatus } from '@apollo/client';
import { GET_GAMES } from '@game-store-monorepo/graphql-client';
import { GameCard } from 'src/components/GameCard';
import { StyledSeparator } from './styles';
import { Box, LoadingIndicator } from '@game-store-monorepo/ui-native';
import SearchForm from './SearchForm';

const ITEM_WIDTH = Dimensions.get('screen').width / 2 - 20;
const ITEM_HEIGHT = 250;

const GameList = () => {
  const flatListRef = React.useRef<FlatList>(null);
  useScrollToTop(flatListRef);

  const queryParams: GamesQueryParams = React.useMemo(() => {
    return {
      variables: {
        page: 1,
        pageSize: 10,
      },
      notifyOnNetworkStatusChange: true,
    };
  }, []);

  const { data, networkStatus, fetchMore, refetch } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);
  const results = data?.allGames.results;
  const nextPage = data?.allGames.nextPage;
  const hasMore = nextPage ? true : false;
  const refetching = networkStatus === NetworkStatus.refetch;

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
    <Box flex={1}>
      <SearchForm />
      <FlatList<Game>
        ref={flatListRef}
        // contentInsetAdjustmentBehavior="automatic"
        numColumns={2}
        data={results}
        keyExtractor={({ id }, index) => `${id}-${index}`}
        getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
        renderItem={renderItem}
        onEndReachedThreshold={0.8}
        onEndReached={handleFetchMore}
        onRefresh={refetch}
        refreshing={refetching}
        ItemSeparatorComponent={StyledSeparator}
        ListFooterComponent={LoadingIndicator}
        ListFooterComponentStyle={{
          paddingVertical: 10,
        }}
        contentContainerStyle={{
          padding: 10,
        }}
      />
    </Box>
  );
};

export default GameList;

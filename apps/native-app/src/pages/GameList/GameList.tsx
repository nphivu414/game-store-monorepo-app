import React from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { Game, GamesQueryParams } from '@root/data-access';
import { useGamesQuery } from '@root/graphql-client';
import { Box, Divider, LoadingIndicator } from '@root/ui-native';
import SearchForm from './SearchForm';
import { GameCard } from '../../components';

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

  const { hasMore, nextPage, refetching, results, fetchMore, refetch, loading } = useGamesQuery(queryParams);

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
      <FlatList<Game>
        ref={flatListRef}
        numColumns={2}
        data={results}
        keyExtractor={({ id }, index) => `${id}-${index}`}
        getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
        renderItem={renderItem}
        onEndReached={handleFetchMore}
        onRefresh={refetch}
        refreshing={refetching}
        ItemSeparatorComponent={Divider}
        ListHeaderComponent={SearchForm}
        stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[0]}
        ListHeaderComponentStyle={{
          marginBottom: 10,
        }}
        ListFooterComponent={(hasMore || loading) && LoadingIndicator}
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

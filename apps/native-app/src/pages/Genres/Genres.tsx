import React from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { GamesQueryParams, Genre, GenresQueryResponse } from '@game-store-monorepo/data-access';
import { useQuery, NetworkStatus } from '@apollo/client';
import { GET_GENRES } from '@game-store-monorepo/graphql-client';
import { GenreCard } from 'src/components/GenreCard';
import { Box, Divider, LoadingIndicator } from '@game-store-monorepo/ui-native';

const ITEM_WIDTH = Dimensions.get('screen').width / 2 - 20;
const ITEM_HEIGHT = 230;

const Genres = () => {
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

  const { data, refetch, networkStatus, fetchMore } = useQuery<GenresQueryResponse>(GET_GENRES, queryParams);
  const genreResults = data?.allGenres.results;
  const nextPage = data?.allGenres.nextPage;
  const hasMore = nextPage ? true : false;
  const refetching = networkStatus === NetworkStatus.refetch;

  const renderItem = React.useCallback(({ item }: ListRenderItemInfo<Genre>) => {
    return <GenreCard data={item} width={ITEM_WIDTH} height={ITEM_HEIGHT} />;
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
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        ref={flatListRef}
        numColumns={2}
        data={genreResults}
        keyExtractor={({ id }, index) => `${id}-${index}`}
        getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
        renderItem={renderItem}
        onEndReached={handleFetchMore}
        onRefresh={refetch}
        refreshing={refetching}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={hasMore && LoadingIndicator}
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

export default Genres;

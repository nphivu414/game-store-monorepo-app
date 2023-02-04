'use client';

import React from 'react';
import cn from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Genre, Publisher, PublishersQueryParams, PublishersQueryResponse } from '@root/data-access';
import { GET_PUBLISHERS } from '@root/graphql-client';
import { useQuery } from '@apollo/client';
import { getMultipleItemNames } from '@root/utils';
import { Card, ROUTES, ScrollToTop, Spinner, ViewDisplayOptions } from '@root/ui-web';
import { NavigationContext } from '../../context/navigation';
import { useRouter } from 'next/navigation';

type ViewType = 'Grid' | 'List';

const queryParams: PublishersQueryParams = {
  variables: {
    page: 1,
    pageSize: 10,
  },
};

type PublisherPageProps = {
  initialData: Publisher[];
  initialNextPage?: number;
  initialHasMore?: boolean;
};

const Publishers = ({ initialData, initialHasMore, initialNextPage }:PublisherPageProps) => {
  const { push } = useRouter();
  const [viewType, setViewType] = React.useState<ViewType>('Grid');
  const { setTitle } = React.useContext(NavigationContext);

  const gridClass = cn({
    'grid grid-flow-row gap-4 !overflow-y-hidden': true,
    'grid-cols-2': viewType === 'Grid',
    'grid-cols-1': viewType === 'List',
  });

  const loadMoreSpinnerClass = cn({
    'sticky bottom-0 left-1/2 text-center h-12': true,
    'translate-x-[-50%]': viewType === 'Grid',
  });

  const gameListClass = cn({
    'text-sm text-base-content-secondary': true,
    'line-clamp-2': viewType === 'Grid',
  });

  const { data, fetchMore } = useQuery<PublishersQueryResponse>(GET_PUBLISHERS, queryParams);
  const nextPage = data?.allPublishers.nextPage;
  const hasMore = nextPage ? true : false;
  const pubishers = data?.allPublishers?.results || initialData;
  const hasMoreData = hasMore || initialHasMore;
  const nextPageData = nextPage || initialNextPage;

  React.useEffect(() => {
    setTitle('Publishers');
  }, [setTitle]);

  const handleFetchMore = React.useCallback(() => {
    fetchMore({
      variables: {
        page: nextPageData,
      },
    });
  }, [fetchMore, nextPageData]);

  const onViewTypeChange = (type: ViewType) => {
    setViewType(type);
  };

  const onItemClick = (value: Genre) => {
    return () => {
      push(`${ROUTES.GAMES}?publishers=${value.id}`);
    };
  };

  return (
    <div className="p-4">
      <ViewDisplayOptions viewType={viewType} onViewTypeChange={onViewTypeChange} />
      <InfiniteScroll
        className={cn(gridClass)}
        dataLength={pubishers?.length || 0}
        scrollThreshold="100px"
        next={handleFetchMore}
        hasMore={hasMoreData}
        loader={
          <div className={loadMoreSpinnerClass}>
            <Spinner isLoading={true} size={20} theme="ClipLoader" />
          </div>
        }
      >
        {pubishers?.map((item) => {
          const { id, name, thumbnailImage, games } = item;
          return (
            <Card key={id} title={name} headerImageUrl={thumbnailImage} isCompact onClick={onItemClick(item)}>
              <p className={gameListClass}>{getMultipleItemNames(games)}</p>
            </Card>
          );
        })}
      </InfiniteScroll>
      <ScrollToTop />
    </div>
  );
};

export default Publishers;

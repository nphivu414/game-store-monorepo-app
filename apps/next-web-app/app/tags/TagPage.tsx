'use client';

import React from 'react';
import cn from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Genre, TagsQueryParams, TagsQueryResponse } from '@root/data-access';
import { GET_TAGS } from '@root/graphql-client';
import { useQuery } from '@apollo/client';
import { getMultipleItemNames } from '@root/utils';
import { Card, ROUTES, ScrollToTop, Spinner, ViewDisplayOptions } from '@root/ui-web';
import { NavigationContext } from '../../context/navigation';
import { useRouter } from 'next/navigation';

type ViewType = 'Grid' | 'List';

const queryParams: TagsQueryParams = {
  variables: {
    page: 1,
    pageSize: 10,
  },
};

type TagPageProps = {
  initialData: Genre[];
  initialNextPage?: number;
  initialHasMore?: boolean;
};

const TagPage = ({ initialData, initialHasMore, initialNextPage }: TagPageProps) => {
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

  const { data, fetchMore } = useQuery<TagsQueryResponse>(GET_TAGS, queryParams);
  const nextPage = data?.allTags.nextPage;
  const hasMore = nextPage ? true : false;
  const tags = data?.allTags?.results || initialData;
  const hasMoreData = hasMore || initialHasMore;
  const nextPageData = nextPage || initialNextPage;

  React.useEffect(() => {
    setTitle('Tags');
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
      push(`${ROUTES.GAMES}?tags=${value.id}`);
    };
  };

  return (
    <div className="p-4">
      <ViewDisplayOptions viewType={viewType} onViewTypeChange={onViewTypeChange} />
      <InfiniteScroll
        className={cn(gridClass)}
        dataLength={tags?.length || 0}
        scrollThreshold="100px"
        next={handleFetchMore}
        hasMore={hasMoreData}
        loader={
          <div className={loadMoreSpinnerClass}>
            <Spinner isLoading={true} size={20} theme="ClipLoader" />
          </div>
        }
      >
        {tags?.map((item) => {
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

export default TagPage;

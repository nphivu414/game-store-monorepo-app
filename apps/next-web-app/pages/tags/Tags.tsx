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

const Tags: React.FC = () => {
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

  const { data, loading, fetchMore } = useQuery<TagsQueryResponse>(GET_TAGS, queryParams);
  const tagResults = data?.allTags.results;
  const nextPage = data?.allTags.nextPage;
  const hasMore = nextPage ? true : false;

  React.useEffect(() => {
    setTitle('Tags');
  }, [setTitle]);

  const handleFetchMore = React.useCallback(() => {
    fetchMore({
      variables: {
        page: nextPage,
      },
    });
  }, [fetchMore, nextPage]);

  const onViewTypeChange = (type: ViewType) => {
    setViewType(type);
  };

  const onItemClick = (value: Genre) => {
    return () => {
      push(`${ROUTES.GAMES}?tags=${value.id}`);
    };
  };

  return (
    <Spinner isLoading={loading} isFullScreen size={30} className="p-4">
      <ViewDisplayOptions viewType={viewType} onViewTypeChange={onViewTypeChange} />
      <InfiniteScroll
        className={cn(gridClass)}
        dataLength={tagResults?.length || 0}
        scrollThreshold="100px"
        next={handleFetchMore}
        hasMore={hasMore}
        loader={
          <div className={loadMoreSpinnerClass}>
            <Spinner isLoading={true} size={20} theme="ClipLoader" />
          </div>
        }
      >
        {tagResults?.map((item) => {
          const { id, name, thumbnailImage, games } = item;
          return (
            <Card key={id} title={name} headerImageUrl={thumbnailImage} isCompact onClick={onItemClick(item)}>
              <p className={gameListClass}>{getMultipleItemNames(games)}</p>
            </Card>
          );
        })}
      </InfiniteScroll>
      <ScrollToTop />
    </Spinner>
  );
};

export default Tags;

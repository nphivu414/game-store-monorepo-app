import React from 'react';
import cn from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Genre, PublishersQueryParams, PublishersQueryResponse } from '@root/data-access';
import { GET_PUBLISHERS } from '@root/graphql-client';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { getMultipleItemNames } from '@root/utils';
import { Card, ROUTES, ScrollToTop, Spinner, ViewDisplayOptions } from '@root/ui-web';
import { NavigationContext } from '../../context/navigation';

type ViewType = 'Grid' | 'List';

const queryParams: PublishersQueryParams = {
  variables: {
    page: 1,
    pageSize: 10,
  },
};

const Publishers: React.FC = () => {
  const navigate = useNavigate();
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

  const { data, loading, fetchMore } = useQuery<PublishersQueryResponse>(GET_PUBLISHERS, queryParams);
  const publisherResults = data?.allPublishers.results;
  const nextPage = data?.allPublishers.nextPage;
  const hasMore = nextPage ? true : false;

  React.useEffect(() => {
    setTitle('Publishers');
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
      navigate(`${ROUTES.GAMES}?publishers=${value.id}`);
    };
  };

  return (
    <Spinner isLoading={loading} isFullScreen size={30} className="p-4">
      <ViewDisplayOptions viewType={viewType} onViewTypeChange={onViewTypeChange} />
      <InfiniteScroll
        className={cn(gridClass)}
        dataLength={publisherResults?.length || 0}
        scrollThreshold="100px"
        next={handleFetchMore}
        hasMore={hasMore}
        loader={
          <div className={loadMoreSpinnerClass}>
            <Spinner isLoading={true} size={20} theme="ClipLoader" />
          </div>
        }
      >
        {publisherResults?.map((item) => {
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

export default Publishers;

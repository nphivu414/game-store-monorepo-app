import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cn from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Game, GamesQueryParams } from '@root/data-access';
import { useGamesQuery } from '@root/graphql-client';
import { getMultipleItemNames } from '@root/utils';
import SearchForm from './SearchForm';
import { Card, PlatformLogos, ROUTES, ScrollToTop, Spinner, ViewDisplayOptions } from '@root/ui-web';
import { NavigationContext } from '../../context/navigation';

type ViewType = 'Grid' | 'List';

const GameList: React.FC = () => {
  const [viewType, setViewType] = React.useState<ViewType>('Grid');
  const navigate = useNavigate();
  const { search } = useLocation();
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

  const queryParams: GamesQueryParams = React.useMemo(() => {
    const searchParams = new URLSearchParams(search);
    return {
      variables: {
        page: 1,
        pageSize: 10,
        dates: searchParams.get('dates'),
        ordering: searchParams.get('ordering'),
        genres: searchParams.get('genres'),
        tags: searchParams.get('tags'),
        publishers: searchParams.get('publishers'),
        search: searchParams.get('search'),
      },
    };
  }, [search]);

  const { results, nextPage, hasMore, loading, fetchMore } = useGamesQuery(queryParams);

  React.useEffect(() => {
    setTitle('Games');
  }, [setTitle]);

  const handleFetchMore = React.useCallback(() => {
    fetchMore({
      variables: {
        page: nextPage,
      },
    });
  }, [fetchMore, nextPage]);

  const onItemClick = (value: Game) => {
    return () => {
      navigate(`${ROUTES.GAMES}/${value.id}`);
    };
  };

  const onViewTypeChange = (type: ViewType) => {
    setViewType(type);
  };

  const renderGames = () => {
    if (!results?.length) {
      return null;
    }
    return results.map((item) => {
      const { id, name, thumbnailImage, parentPlatforms, genres } = item;
      return (
        <Card key={id} headerImageUrl={thumbnailImage} isCompact onClick={onItemClick(item)}>
          {name && <p className="font-semibold truncate  mb-1">{name}</p>}
          <div>
            <PlatformLogos data={parentPlatforms} amount={5} className="mt-1" />
            <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleItemNames(genres, 2)}`}</p>
          </div>
        </Card>
      );
    });
  };

  return (
    <div>
      <Spinner isLoading={loading} isFullScreen size={30} className="px-4">
        <div className="pt-4 relative z-10">
          <SearchForm className="mb-4 sticky top-0" />
          <ViewDisplayOptions viewType={viewType} onViewTypeChange={onViewTypeChange} />
        </div>
        <InfiniteScroll
          className={cn(gridClass)}
          dataLength={results?.length || 0}
          scrollThreshold="100px"
          next={handleFetchMore}
          hasMore={hasMore}
          loader={
            <div className={loadMoreSpinnerClass}>
              <Spinner isLoading={true} size={20} theme="ClipLoader" />
            </div>
          }
        >
          {renderGames()}
        </InfiniteScroll>
        <ScrollToTop />
      </Spinner>
    </div>
  );
};

export default GameList;

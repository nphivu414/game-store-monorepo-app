import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Game, GameSeriesQueryParams, GameSeriesQueryResponse } from '@root/data-access';
import { getMultipleItemNames } from '@root/utils';
import { GET_GAME_SERIES } from '@root/graphql-client';
import { Card, PlatformLogos, ROUTES, Section, Spinner } from '@root/ui-web';

type GameSeriesProps = {
  gameId: number;
  isLoading?: boolean;
};

const GameSeries: React.FC<GameSeriesProps> = ({ gameId }) => {
  const navigate = useNavigate();
  const queryParams: GameSeriesQueryParams = React.useMemo(() => {
    return {
      variables: {
        id: gameId,
        page: 1,
        pageSize: 4,
      },
    };
  }, [gameId]);

  const { data, loading, fetchMore } = useQuery<GameSeriesQueryResponse>(GET_GAME_SERIES, queryParams);
  const gameResults = data?.gameSeries.results;
  const nextPage = data?.gameSeries.nextPage;
  const hasMore = nextPage ? true : false;

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

  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <Spinner theme="ClipLoader" size={20} />
      </div>
    );
  }

  if (!gameResults?.length) {
    return null;
  }

  return (
    <Section titleText="Other games in the series" titleClassName="ml-4" className="mt-4 mb-4">
      <div className="px-4">
        <InfiniteScroll
          className="grid grid-cols-2 grid-flow-row gap-4 !overflow-y-hidden"
          dataLength={gameResults?.length || 0}
          scrollThreshold="100px"
          next={handleFetchMore}
          hasMore={hasMore}
          loader={
            <div className="sticky bottom-0 left-1/2 text-center h-12 translate-x-[-50%]">
              <Spinner isLoading={true} size={20} theme="ClipLoader" />
            </div>
          }
        >
          {gameResults?.map((item) => {
            const { id, name, thumbnailImage, parentPlatforms, genres } = item;
            return (
              <Card key={id} headerImageUrl={thumbnailImage} isCompact onClick={onItemClick(item)}>
                {name && <p className="font-semibold truncate  mb-1">{name}</p>}
                <div>
                  <PlatformLogos data={parentPlatforms} amount={5} className="mt-1" />
                  <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleItemNames(
                    genres,
                    2,
                  )}`}</p>
                </div>
              </Card>
            );
          })}
        </InfiniteScroll>
      </div>
    </Section>
  );
};

export default GameSeries;

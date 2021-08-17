import { useQuery } from '@apollo/client';
import { GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { getMultipleItemNames } from '@game-store-monorepo/util';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/Button';
import List, { ListItem } from 'src/components/List';
import PlatformLogos from 'src/components/PlatformLogos';
import { GET_GAMES } from 'src/graphql/queries';
import { ROUTES } from 'src/routes/routes';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2021-08-31,2021-12-31',
    ordering: '-added',
  },
};

const UpcomingGames: React.FC = () => {
  const { push } = useHistory();
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);

  const listData: ListItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }
    return data.allGames.results.map((item): ListItem => {
      return {
        id: item.id,
        avatarUrl: item.thumbnailImage,
        title: item.name,
        content: (
          <div>
            <PlatformLogos data={item.parentPlatforms} className="mt-1" />
            <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleItemNames(
              item.genres,
              3,
            )}`}</p>
          </div>
        ),
      };
    });
  }, [data]);

  const onItemClick = (value: ListItem) => {
    push(`${ROUTES.GAMES}/${value.id}`);
  };

  const onSeeAllButtonClick = () => {
    const queryString = new URLSearchParams({
      dates: queryParams.variables.dates || '',
      ordering: queryParams.variables.ordering || '',
    }).toString();
    push(`${ROUTES.GAMES}?${queryString}`);
  };

  return (
    <>
      <List data={listData} onItemClick={onItemClick} isLoading={loading} />
      {listData.length > 0 && (
        <Button isBlock variant="primary" className="mt-2" onClick={onSeeAllButtonClick}>
          See all
        </Button>
      )}
    </>
  );
};

export default UpcomingGames;

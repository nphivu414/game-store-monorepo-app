import { useQuery } from '@apollo/client';
import { GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { getMultipleItemNames } from '@game-store-monorepo/util';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_GAMES } from '@game-store-monorepo/graphql-client';
import { ROUTES } from 'src/routes/routes';
import { Button, List, ListItem, PlatformLogos } from '@game-store-monorepo/ui-web';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2021-01-31,2021-08-01',
    ordering: '-added',
  },
};

const NewReleases: React.FC = () => {
  const navigate = useNavigate();
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
    navigate(`${ROUTES.GAMES}/${value.id}`);
  };

  const onSeeAllButtonClick = () => {
    const queryString = new URLSearchParams({
      dates: queryParams.variables.dates || '',
      ordering: queryParams.variables.ordering || '',
    }).toString();
    navigate(`${ROUTES.GAMES}?${queryString}`);
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

export default NewReleases;

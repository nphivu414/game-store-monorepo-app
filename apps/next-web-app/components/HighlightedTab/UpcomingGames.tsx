import { GamesQueryParams, RawgGameResponse } from '@root/data-access';
import { getMultipleItemNames } from '@root/utils';
import React from 'react';
import { Button, List, ListItem, PlatformLogos, ROUTES } from '@root/ui-web';
import { useRouter } from 'next/navigation';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2021-08-31,2021-12-31',
    ordering: '-added',
  },
};

type UpcomingGamesProps = {
  data?: RawgGameResponse;
};

const UpcomingGames = ({ data }: UpcomingGamesProps) => {
  const { push } = useRouter();

  const listData: ListItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }
    return data.results.map((item): ListItem => {
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
      <List data={listData} onItemClick={onItemClick} />
      {listData.length > 0 && (
        <Button isBlock variant="primary" className="mt-2" onClick={onSeeAllButtonClick}>
          See all
        </Button>
      )}
    </>
  );
};

export default UpcomingGames;

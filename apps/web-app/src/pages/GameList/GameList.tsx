import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Game, GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { GET_GAMES } from 'src/graphql/queries';
import PlatformLogos from 'src/components/PlatformLogos';
import { getMultipleGenreNames } from '@game-store-monorepo/util';
import Card from 'src/components/Card';
import { ROUTES } from 'src/routes/routes';
import Spinner from 'src/components/Spinner';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 15,
    dates: '1990-01-01,2020-12-31',
    ordering: '-added',
  },
};

const GameList: React.FC = () => {
  const { push } = useHistory();
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);

  const onItemClick = (value: Game) => {
    return () => {
      push(`${ROUTES.GAMES}/${value.id}`);
    };
  };

  return (
    <Spinner isLoading={loading}>
      <div className="grid grid-flow-row grid-cols-2 gap-2">
        {data?.allGames.map((item) => {
          const { id, name, backgroundImage, parentPlatforms, genres } = item;
          return (
            <Card key={id} headerImageUrl={backgroundImage} isCompact onClick={onItemClick(item)}>
              {name && <p className="font-semibold truncate  mb-1">{name}</p>}
              <div>
                <PlatformLogos data={parentPlatforms} className="mt-1" />
                <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleGenreNames(
                  genres,
                  2,
                )}`}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Spinner>
  );
};

export default GameList;

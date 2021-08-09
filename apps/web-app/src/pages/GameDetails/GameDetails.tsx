import { useQuery } from '@apollo/client';
import { GameDetailsQueryParams, GameDetailsQueryResponse } from '@game-store-monorepo/data-access';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { GET_GAME_DETAILS } from 'src/graphql/queries';
import GeneralInformation from './GeneralInformation';

type GameDetailRouteParams = {
  id: string;
};

const GameDetails: React.FC = () => {
  const { id } = useParams<GameDetailRouteParams>();
  const queryParams: GameDetailsQueryParams = React.useMemo(() => {
    return {
      variables: {
        id: parseInt(id),
      },
    };
  }, [id]);
  const { data } = useQuery<GameDetailsQueryResponse>(GET_GAME_DETAILS, queryParams);
  if (!data) {
    return null;
  }

  const gameDetails = data.gameDetails;

  return (
    <div className="flex flex-col">
      <GeneralInformation data={gameDetails} />
    </div>
  );
};

export default GameDetails;

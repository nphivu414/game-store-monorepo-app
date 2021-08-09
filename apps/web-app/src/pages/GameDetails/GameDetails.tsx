import { useQuery } from '@apollo/client';
import { GameDetailsQueryParams, GameDetailsQueryResponse } from '@game-store-monorepo/data-access';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { GET_GAME_DETAILS } from 'src/graphql/queries';

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
  const { data, loading } = useQuery<GameDetailsQueryResponse>(GET_GAME_DETAILS, queryParams);

  return (
    <div className="flex">
      <h1>Game Details</h1>
    </div>
  );
};

export default GameDetails;

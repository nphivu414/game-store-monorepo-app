import { useQuery } from '@apollo/client';
import { GameDetailsQueryParams, GameDetailsQueryResponse } from '@game-store-monorepo/data-access';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import { NavigationContext } from 'src/context/navigation';
import { GET_GAME_DETAILS } from 'src/graphql/queries';
import GeneralInformation from './GeneralInformation';

type GameDetailRouteParams = {
  id: string;
};

const GameDetails: React.FC = () => {
  const { setTitle } = React.useContext(NavigationContext);
  const { id } = useParams<GameDetailRouteParams>();
  const queryParams: GameDetailsQueryParams = React.useMemo(() => {
    return {
      variables: {
        id: parseInt(id),
      },
    };
  }, [id]);

  const { data, loading } = useQuery<GameDetailsQueryResponse>(GET_GAME_DETAILS, queryParams);

  React.useEffect(() => {
    setTitle(data?.gameDetails.name || '...');
  }, [data?.gameDetails.name, setTitle]);

  const gameDetails = data?.gameDetails;

  return (
    <Spinner isFullScreen isLoading={loading} size={30} className="flex flex-col">
      <GeneralInformation data={gameDetails} />
    </Spinner>
  );
};

export default GameDetails;

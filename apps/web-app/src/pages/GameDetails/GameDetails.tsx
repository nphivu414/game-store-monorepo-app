import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GameDetailsQueryParams, GameDetailsQueryResponse } from '@game-store-monorepo/data-access';
import { useParams } from 'react-router-dom';
import { NavigationContext } from 'src/context/navigation';
import { GET_GAME_DETAILS } from 'src/graphql/queries';
import GeneralInformation from './GeneralInformation';
import MediaPreviewTab from './MediaPreviewTab';
import ScrollToTop from 'src/components/ScrollToTop';
import Tags from './Tags';
import Description from './Description';
import GameSeries from './GameSeries/GameSeries';
import Genres from './Genres';

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
  const gameDetails = data?.gameDetails;

  React.useEffect(() => {
    setTitle(gameDetails?.name || '...');
  }, [gameDetails?.name, setTitle]);

  return (
    <>
      <GeneralInformation data={gameDetails} isLoading={loading} />
      <MediaPreviewTab data={gameDetails} isLoading={loading} />
      <Description data={gameDetails?.description} isLoading={loading} />
      <Genres data={gameDetails?.genres} isLoading={loading} />
      <Tags data={gameDetails?.tags} isLoading={loading} />
      {gameDetails?.id && <GameSeries gameId={gameDetails.id} />}
      <ScrollToTop />
    </>
  );
};

export default GameDetails;

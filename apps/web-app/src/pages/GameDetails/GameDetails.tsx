import React from 'react';
import { useQuery } from '@apollo/client';
import { GameDetailsQueryParams, GameDetailsQueryResponse } from '@root/data-access';
import { useParams } from 'react-router-dom';
import { GET_GAME_DETAILS } from '@root/graphql-client';
import GeneralInformation from './GeneralInformation';
import MediaPreviewTab from './MediaPreviewTab';
import Tags from './Tags';
import Description from './Description';
import GameSeries from './GameSeries/GameSeries';
import GamesInGenres from './GamesInGenres';
import { ScrollToTop } from '@root/ui-web';
import { NavigationContext } from '../../context/navigation';

type GameDetailRouteParams = {
  id: string;
};

const GameDetails: React.FC = () => {
  const { setTitle } = React.useContext(NavigationContext);
  const { id } = useParams<GameDetailRouteParams>();

  const queryParams: GameDetailsQueryParams = React.useMemo(() => {
    return {
      variables: {
        id: id ? parseInt(id) : 0,
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
      <GamesInGenres data={gameDetails?.genres} />
      <Tags data={gameDetails?.tags} isLoading={loading} />
      {gameDetails?.id && <GameSeries gameId={gameDetails.id} />}
      <ScrollToTop />
    </>
  );
};

export default GameDetails;

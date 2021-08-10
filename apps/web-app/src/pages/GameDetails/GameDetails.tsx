import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GameDetailsQueryParams, GameDetailsQueryResponse } from '@game-store-monorepo/data-access';
import { useParams } from 'react-router-dom';
import Section from 'src/components/Section';
import Spinner from 'src/components/Spinner';
import { NavigationContext } from 'src/context/navigation';
import { GET_GAME_DETAILS } from 'src/graphql/queries';
import GeneralInformation from './GeneralInformation';
import MediaPreviewTab from './MediaPreviewTab';
import Badge from 'src/components/Badge';
import GameSeries from './GameSeries/GameSeries';

type GameDetailRouteParams = {
  id: string;
};

const GameDetails: React.FC = () => {
  const { setTitle } = React.useContext(NavigationContext);
  const { id } = useParams<GameDetailRouteParams>();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <MediaPreviewTab data={gameDetails} />
      {gameDetails && (
        <>
          <Section titleText="Description" titleClassName="ml-4" className="mt-4">
            <div className="bg-base-100 p-4">
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: gameDetails?.description || '' }}></p>
            </div>
          </Section>
          <Section titleText="Tags" titleClassName="ml-4" className="mt-4">
            <div className="bg-base-100 p-4">
              {gameDetails?.tags?.map((item) => {
                return (
                  <Badge variant="info" className="mr-2 mb-2">
                    {item.slug}
                  </Badge>
                );
              })}
            </div>
          </Section>
          <Section titleText="Other games in the series" titleClassName="ml-4" className="mt-4 mb-4">
            <div className="px-4">
              <GameSeries gameId={gameDetails.id} />
            </div>
          </Section>
        </>
      )}
    </Spinner>
  );
};

export default GameDetails;

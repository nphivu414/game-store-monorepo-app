'use client';

import React from 'react';
import { Game } from '@root/data-access';
import GeneralInformation from './GeneralInformation';
import MediaPreviewTab from './MediaPreviewTab';
import Tags from './Tags';
import Description from './Description';
import GameSeries from './GameSeries/GameSeries';
import GamesInGenres from './GamesInGenres';
import { ScrollToTop } from '@root/ui-web';
import { NavigationContext } from '../../../context/navigation';
import { ParsedUrlQuery } from 'querystring';

export interface GameDetailRouteQuery extends ParsedUrlQuery {
  gameId: string;
}

type GameDetailPageProps = {
  data?: Game;
};

const GameDetailPage = ({ data }: GameDetailPageProps) => {
  const { setTitle } = React.useContext(NavigationContext);

  React.useEffect(() => {
    setTitle(data?.name || '...');
  }, [data?.name, setTitle]);

  return (
    <>
      <GeneralInformation data={data} />
      <MediaPreviewTab data={data} />
      <Description data={data?.description} />
      <GamesInGenres data={data?.genres} />
      <Tags data={data?.tags} />
      {data?.id && <GameSeries gameId={data.id} />}
      <ScrollToTop />
    </>
  );
};

export default GameDetailPage;

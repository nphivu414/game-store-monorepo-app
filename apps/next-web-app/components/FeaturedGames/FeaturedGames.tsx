import * as React from 'react';
import { RawgGameResponse } from '@root/data-access';
import PureGameCarousel from '../PureGameCarousel';

type FeaturedGamesProps = {
  data?: RawgGameResponse;
};

const FeaturedGames = ({ data }: FeaturedGamesProps) => {
  return <PureGameCarousel gameData={data} className="carousel-center mb-6" itemSize="large" />;
};

export default FeaturedGames;

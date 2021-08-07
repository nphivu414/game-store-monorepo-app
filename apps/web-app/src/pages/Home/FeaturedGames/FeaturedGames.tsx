import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_GAMES } from 'src/graphql/queries';
import Carousel, { CarouselItem } from 'src/components/Carousel';
import { GamesQueryResponse } from '@game-store-monorepo/data-access';
import { getMultiplePlatformNames } from '@game-store-monorepo/util';

const FeaturedGames: React.FC = () => {
  const { push } = useHistory();
  const { data } = useQuery<GamesQueryResponse>(GET_GAMES, {
    variables: {
      pageSize: 5,
      dates: '2020-01-01,2020-12-31',
      ordering: '-added',
    },
  });

  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }
    return data.allGames.map((item): CarouselItem => {
      return {
        id: item.id,
        headerImageUrl: item.backgroundImage,
        title: item.name,
        subTitle: `Platforms: ${getMultiplePlatformNames(item.parentPlatforms, 3)}`,
      };
    });
  }, [data]);

  const onItemClick = () => {
    return () => {
      push('/games/123');
    };
  };

  return (
    <Carousel data={carouselData} className="carousel-center mb-6" itemClassName="w-4/5" onItemClick={onItemClick()} />
  );
};

export default FeaturedGames;

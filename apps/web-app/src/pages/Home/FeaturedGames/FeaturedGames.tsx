import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel, { CarouselItem } from 'src/components/Carousel';
import { gql, useQuery } from '@apollo/client';

const FEATURED_GAMES = gql`
  query allGames {
    allGames(page: 1, pageSize: 5) {
      id
      name
      backgroundImage
      rating
      platforms {
        platform {
          id
          name
          image
          imageBackground
        }
        releasedAt
      }
    }
  }
`;

const FeaturedGames: React.FC = () => {
  const { push } = useHistory();
  const { loading, error, data } = useQuery(FEATURED_GAMES);

  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!data) {
      return;
    }
    return data.allGames.map((item) => {
      return {
        id: item.id,
        headerImageUrl: item.backgroundImage,
        title: item.name,
        subTitle: item.platforms.map((platform) => platform.platform.name).join(','),
      };
    });
  }, [data]);
  console.log('🚀 ~ file: FeaturedGames.tsx ~ line 56 ~ data', data);

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

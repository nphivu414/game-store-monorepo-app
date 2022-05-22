import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import cn from 'classnames';
import { GET_GAMES } from 'src/graphql/queries';
import Carousel, { CarouselItem, CarouselProps } from 'src/components/Carousel';
import { GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { getMultipleItemNames } from '@game-store-monorepo/util';
import PlatformLogos from 'src/components/PlatformLogos';
import { ROUTES } from 'src/routes/routes';

type GameCarouselProps = {
  queryParams: GamesQueryParams;
} & CarouselProps;

const GameCarousel: React.FC<GameCarouselProps> = ({ queryParams, className, itemClassName, ...rest }) => {
  const navigate = useNavigate();
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);

  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }
    return data.allGames.results.map((item): CarouselItem => {
      return {
        id: item.id,
        headerImageUrl: item.thumbnailImage,
        title: item.name,
        content: (
          <div>
            <PlatformLogos data={item.parentPlatforms} className="mt-1" />
            <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleItemNames(
              item.genres,
              3,
            )}`}</p>
          </div>
        ),
      };
    });
  }, [data]);

  const onItemClick = (value: CarouselItem) => {
    navigate(`${ROUTES.GAMES}/${value.id}`);
  };

  return (
    <Carousel
      data={carouselData}
      isLoading={loading}
      className={cn('mb-6', className)}
      itemClassName={itemClassName}
      onItemClick={onItemClick}
      {...rest}
    />
  );
};

export default GameCarousel;

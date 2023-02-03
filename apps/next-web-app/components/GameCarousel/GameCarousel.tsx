import React from 'react';
import { useQuery } from '@apollo/client';
import cn from 'classnames';
import { GamesQueryParams, GamesQueryResponse } from '@root/data-access';
import { getMultipleItemNames } from '@root/utils';
import { GET_GAMES } from '@root/graphql-client';
import { Carousel, CarouselItem, CarouselProps, PlatformLogos, ROUTES } from '@root/ui-web';
import { useRouter } from 'next/navigation';

type GameCarouselProps = {
  queryParams: GamesQueryParams;
  itemSize?: CarouselItem['size'];
} & CarouselProps;

const GameCarousel: React.FC<GameCarouselProps> = ({ queryParams, className, itemSize, ...rest }) => {
  const { push } = useRouter();
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
        size: itemSize,
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
  }, [data, itemSize]);

  const onItemClick = (value: CarouselItem) => {
    push(`${ROUTES.GAMES}/${value.id}`);
  };

  return (
    <Carousel
      data={carouselData}
      isLoading={loading}
      className={cn('mb-6', className)}
      onItemClick={onItemClick}
      {...rest}
    />
  );
};

export default GameCarousel;

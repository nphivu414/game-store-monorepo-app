import React from 'react';
import cn from 'classnames';
import { RawgGameResponse } from '@root/data-access';
import { getMultipleItemNames } from '@root/utils';
import { Carousel, CarouselItem, CarouselProps, PlatformLogos, ROUTES } from '@root/ui-web';
import { useRouter } from 'next/navigation';

type PureGameCarouselProps = {
  itemSize?: CarouselItem['size'];
  gameData?: RawgGameResponse;
} & Omit<CarouselProps, 'data'>;

const PureGameCarousel: React.FC<PureGameCarouselProps> = ({ className, itemSize, gameData, ...rest }) => {
  const { push } = useRouter();

  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!gameData) {
      return [];
    }
    return gameData.results.map((item): CarouselItem => {
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
  }, [gameData, itemSize]);

  const onItemClick = (value: CarouselItem) => {
    push(`${ROUTES.GAMES}/${value.id}`);
  };

  return <Carousel data={carouselData} className={cn('mb-6', className)} onItemClick={onItemClick} {...rest} />;
};

export default PureGameCarousel;

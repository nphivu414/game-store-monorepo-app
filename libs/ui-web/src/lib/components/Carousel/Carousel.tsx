import React from 'react';
import cn from 'classnames';
import { Card } from '../Card';
import { Skeleton, SkeletonProps } from '../Skeleton';

export type CarouselProps = {
  className?: string;
  itemClassName?: string;
  data?: CarouselItem[];
  isCompact?: boolean;
  isLoading?: boolean;
  noPadding?: boolean;
  loadingSkeletonType?: SkeletonProps['theme'];
  onItemClick?: (value: CarouselItem) => void;
};

export type CarouselItem = {
  id: string | number;
  headerImageUrl?: string;
  title?: string;
  subTitle?: string;
  content?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
};

export const Carousel: React.FC<CarouselProps> = ({
  className,
  itemClassName,
  data,
  isCompact,
  isLoading,
  noPadding,
  loadingSkeletonType = 'GAME_CARD_ITEM',
  onItemClick,
}) => {
  const carouselClass = cn({
    'carousel pb-2 overflow-x-auto': true,
  });
  const carouselItemBodyClass = cn({
    '!p-0': noPadding,
  });

  const handleOnItemClick = (value: CarouselItem) => {
    return () => {
      onItemClick && onItemClick(value);
    };
  };

  const renderCarouselItem = () => {
    return data?.map((item) => {
      const { id, title, subTitle, content, headerImageUrl, size = 'medium' } = item;
      const carouselItemClass = cn({
        'carousel-item mr-4 last:mr-0': true,
        'w-2/5': size === 'small',
        'w-2/3': size === 'medium',
        'w-4/5': size === 'large',
      });
      return (
        <Card
          key={id}
          headerImageUrl={headerImageUrl}
          isCompact={isCompact}
          className={cn(carouselItemClass, itemClassName)}
          bodyClassName={carouselItemBodyClass}
          onClick={handleOnItemClick(item)}
        >
          {title && <p className="font-semibold truncate  mb-1">{title}</p>}
          {subTitle && <p className="text-xs">{subTitle}</p>}
          {content}
        </Card>
      );
    });
  };

  if (isLoading) {
    return (
      <div className={cn(carouselClass, className)}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="carousel-item ml-4 w-3/4">
              <Skeleton theme={loadingSkeletonType} />
            </div>
          ))}
      </div>
    );
  }

  if (!data?.length) {
    return <p className="text-center text-base-content-secondary">No data</p>;
  }

  return <div className={cn(carouselClass, className)}>{renderCarouselItem()}</div>;
};

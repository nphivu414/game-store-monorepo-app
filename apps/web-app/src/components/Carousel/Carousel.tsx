import * as React from 'react';
import cn from 'classnames';
import Card from '../Card';

type CarouselProps = {
  className?: string;
  itemClassName?: string;
  data?: CarouselItem[];
  isCompact?: boolean;
  onItemClick?: (value: CarouselItem) => void;
};

export type CarouselItem = {
  id: string | number;
  headerImageUrl?: string;
  title?: string;
  subTitle?: string;
};

const Carousel: React.FC<CarouselProps> = ({ className, itemClassName, data, isCompact, onItemClick }) => {
  if (!data) {
    return null;
  }

  const carouselClass = cn({
    'carousel pb-2 overflow-x-auto': true,
  });
  const carouselItemClass = cn({
    'carousel-item mr-4 w-1/2 last:mr-0': true,
    'cursor-pointer': true,
    'transition duration-200 ease-in-out transform hover:-translate-y-1 hover:-translate-y-1': true,
  });

  const handleOnItemClick = (value: CarouselItem) => {
    return () => {
      onItemClick && onItemClick(value);
    };
  };

  const renderCarouselItem = () => {
    return data.map((item) => {
      const { id, title, subTitle, headerImageUrl } = item;
      return (
        <Card
          key={id}
          headerImageUrl={headerImageUrl}
          isCompact={isCompact}
          className={cn(carouselItemClass, itemClassName)}
          onClick={handleOnItemClick(item)}
        >
          {title && <p className="font-semibold mb-1">{title}</p>}
          {subTitle && <p>{subTitle}</p>}
        </Card>
      );
    });
  };
  return <div className={cn(carouselClass, className)}>{renderCarouselItem()}</div>;
};

export default Carousel;

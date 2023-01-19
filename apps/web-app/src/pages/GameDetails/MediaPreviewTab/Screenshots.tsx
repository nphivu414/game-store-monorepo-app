import * as React from 'react';
import { Screenshot } from '@root/data-access';
import { Carousel, CarouselItem } from '@root/ui-web';

type ScreenshotsProps = {
  data?: Screenshot[];
  isLoading?: boolean;
};

const Screenshots: React.FC<ScreenshotsProps> = ({ data, isLoading }) => {
  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item): CarouselItem => {
      return {
        id: item.id,
        size: 'large',
        content: <img src={item.image} className="w-full h-full" alt="" />,
      };
    });
  }, [data]);

  return (
    <div>
      <Carousel
        isCompact
        isLoading={isLoading}
        noPadding
        data={carouselData}
        className="carousel-center"
        itemClassName="first:ml-4 last:mr-4"
        loadingSkeletonType="BASIC_RECT"
      />
    </div>
  );
};

export default Screenshots;

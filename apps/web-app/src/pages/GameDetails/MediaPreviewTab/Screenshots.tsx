import * as React from 'react';
import Carousel, { CarouselItem } from 'src/components/Carousel';
import { Screenshot } from '@game-store-monorepo/data-access';

type ScreenshotsProps = {
  data?: Screenshot[];
};

const Screenshots: React.FC<ScreenshotsProps> = ({ data }) => {
  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item): CarouselItem => {
      return {
        id: item.id,
        content: <img src={item.image} className="w-full h-full" alt="" />,
      };
    });
  }, [data]);

  return (
    <div>
      <Carousel
        isCompact
        noPadding
        data={carouselData}
        className="carousel-center"
        itemClassName="w-2/3 first:ml-4 last:mr-4"
      />
    </div>
  );
};

export default Screenshots;

import { Trailer } from '@game-store-monorepo/data-access';
import { Carousel, CarouselItem } from '@game-store-monorepo/ui-web';
import * as React from 'react';

type VideosProps = {
  data?: Trailer[];
  isLoading?: boolean;
};

const Videos: React.FC<VideosProps> = ({ data, isLoading }) => {
  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item): CarouselItem => {
      return {
        id: item.id,
        content: (
          <video className="w-full h-full" controls poster={item.preview}>
            <source src={item.data.thumbnail} type="video/mp4" />
          </video>
        ),
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
        itemClassName="w-2/3 first:ml-4 last:mr-4"
      />
    </div>
  );
};

export default Videos;

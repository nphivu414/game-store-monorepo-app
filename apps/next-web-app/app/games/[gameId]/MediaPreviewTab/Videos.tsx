'use client';
import { Trailer } from '@root/data-access';
import { Carousel, CarouselItem } from '@root/ui-web';
import React from 'react';

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
        size: 'large',
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
        itemClassName="first:ml-4 last:mr-4"
        loadingSkeletonType="BASIC_RECT"
      />
    </div>
  );
};

export default Videos;

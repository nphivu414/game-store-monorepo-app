import * as React from 'react';
import Carousel, { CarouselItem } from 'src/components/Carousel';

const data: CarouselItem[] = [
  {
    id: '1',
    headerImageUrl: 'https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
    title: 'Death Strading',
    subTitle: 'PSN, Steam'
  },
  {
    id: '2',
    headerImageUrl: 'https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
    title: 'Death Strading',
    subTitle: 'PSN, Steam'
  },
  {
    id: '3',
    headerImageUrl: 'https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
    title: 'Death Strading',
    subTitle: 'PSN, Steam'
  },
  {
    id: '4',
    headerImageUrl: 'https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
    title: 'Death Strading',
    subTitle: 'PSN, Steam'
  },
]

const FeaturedGames: React.FC = () => {
  return (
    <Carousel data={data} className="carousel-center" itemClassName="w-4/5"/>
  )
}

export default FeaturedGames;

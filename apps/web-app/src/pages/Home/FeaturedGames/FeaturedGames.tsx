import * as React from 'react';
import { useHistory } from 'react-router-dom';
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
  const { push } = useHistory()

  const onItemClick = () => {
    return () => {
      push('/games/123')
    }
  }
  
  return (
    <Carousel data={data} className="carousel-center mb-6" itemClassName="w-4/5" onItemClick={onItemClick()}/>
  )
}

export default FeaturedGames;

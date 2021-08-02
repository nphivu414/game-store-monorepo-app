import * as React from 'react';
import Button from 'src/components/Button';
import Carousel, { CarouselItem } from 'src/components/Carousel';
import Section from 'src/components/Section';

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

const BestGames: React.FC = () => {
  return (
    <Section titleText="Best Of All Time" className="mt-6" rightElement={<Button variant="primary" size="extra-small" isLink>See all</Button>}>
      <Carousel data={data} isCompact/>
    </Section>
  )
}

export default BestGames;

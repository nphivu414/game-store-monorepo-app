import * as React from 'react';
import Button from 'src/components/Button';
import Card from 'src/components/Card';
import Section from 'src/components/Section';

const BestGames: React.FC = () => {
  return (
    <Section titleText="Best Of All Time" className="mt-4" rightElement={<Button variant="primary" size="extra-small" isLink>See all</Button>}>
      <div className="carousel pb-2 overflow-x-auto">
        <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-1/2 last:mr-0">
          <p>Death Stranding</p>
          <p>Steam, PSN</p>
        </Card>
        <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-1/2 last:mr-0">
          <p>Death Stranding</p>
          <p>Steam, PSN</p>
        </Card>
        <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-1/2 last:mr-0">
          <p>Death Stranding</p>
          <p>Steam, PSN</p>
        </Card>
        <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-1/2 last:mr-0">
          <p>Death Stranding</p>
          <p>Steam, PSN</p>
        </Card>
        <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-1/2 last:mr-0">
          <p>Death Stranding</p>
          <p>Steam, PSN</p>
        </Card>
      </div>
    </Section>
  )
}

export default BestGames;

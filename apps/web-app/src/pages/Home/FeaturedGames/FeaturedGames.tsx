import * as React from 'react';
import Card from 'src/components/Card';

const FeaturedGames: React.FC = () => {
  return (
    <div className="carousel carousel-center pb-2 overflow-x-auto">
      <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-4/5 last:mr-0">
        <p>Death Stranding</p>
        <p>Steam, PSN</p>
      </Card>
      <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-4/5 last:mr-0">
        <p>Death Stranding</p>
        <p>Steam, PSN</p>
      </Card>
      <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-4/5 last:mr-0">
        <p>Death Stranding</p>
        <p>Steam, PSN</p>
      </Card>
      <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-4/5 last:mr-0">
        <p>Death Stranding</p>
        <p>Steam, PSN</p>
      </Card>
      <Card headerImageUrl="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" isCompact className="carousel-item mr-4 w-4/5 last:mr-0">
        <p>Death Stranding</p>
        <p>Steam, PSN</p>
      </Card>
    </div>
  )
}

export default FeaturedGames;

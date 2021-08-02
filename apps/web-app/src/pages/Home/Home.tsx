import * as React from 'react';
import BestGames from './BestGames';
import FeaturedGames from './FeaturedGames';

const Home: React.FC = () => {
  return (
    <div>
      <FeaturedGames/>
      <BestGames/>
    </div>
  )
}

export default Home

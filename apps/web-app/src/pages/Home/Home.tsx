import * as React from 'react';
import BestGames from './BestGames';
import FeaturedGames from './FeaturedGames';
import HighlightedTab from './HighlightedTab';


const Home: React.FC = () => {
  return (
    <>
      <FeaturedGames/>
      <BestGames/>
      <HighlightedTab/>
    </>
  )
}

export default Home

import * as React from 'react';
import { NavigationContext } from 'src/context/navigation';
import BestGames from './BestGames';
import FeaturedGames from './FeaturedGames';
import HighlightedTab from './HighlightedTab';

const Home: React.FC = () => {
  const { setTitle } = React.useContext(NavigationContext);

  React.useEffect(() => {
    setTitle('Game Store');
  }, [setTitle]);

  return (
    <div className="p-4">
      <FeaturedGames />
      <BestGames />
      <HighlightedTab />
    </div>
  );
};

export default Home;

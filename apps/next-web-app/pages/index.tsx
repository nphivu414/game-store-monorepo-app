import * as React from 'react';
import { BestGames, FeaturedGames, HighlightedTab } from '../components';
import { NavigationContext } from '../context/navigation';

const Index = () => {
  const { setTitle } = React.useContext(NavigationContext);

  React.useEffect(() => {
    setTitle('Explore');
  }, [setTitle]);

  return (
    <div className="p-4">
      <FeaturedGames />
      <BestGames />
      <HighlightedTab />
    </div>
  );
};

export default Index;

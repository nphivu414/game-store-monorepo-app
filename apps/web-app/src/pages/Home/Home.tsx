import * as React from 'react';
import TabView from 'src/components/TabView';
import { TabViewItem } from 'src/components/TabView/TabView';
import BestGames from './BestGames';
import FeaturedGames from './FeaturedGames';

const tabData: TabViewItem[] = [
  {
    id: '1',
    title: 'New Releases',
    content: <h3>Tab 1</h3>
  },
  {
    id: '2',
    title: 'Comming Soon',
    content: <h3>Tab 2</h3>
  },
]

const Home: React.FC = () => {
  return (
    <div>
      <FeaturedGames/>
      <BestGames/>
      <TabView data={tabData} className="mt-4"/>
    </div>
  )
}

export default Home

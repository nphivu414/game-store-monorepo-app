import * as React from 'react';
import Card from 'src/components/Card';
import Section from 'src/components/Section';
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
    <>
      <FeaturedGames/>
      <BestGames/>
      <Card isCompact className="mt-4">
        <TabView data={tabData} className="mt-4"/>
      </Card>
    </>
  )
}

export default Home

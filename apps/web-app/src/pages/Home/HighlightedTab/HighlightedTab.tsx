import { Card, TabView, TabViewItem } from '@game-store-monorepo/ui-web';
import NewReleases from './NewReleases';
import UpcomingGames from './UpcomingGames';

const tabData: TabViewItem[] = [
  {
    id: '1',
    title: 'New Releases',
    content: <NewReleases />,
  },
  {
    id: '2',
    title: 'Up Comming',
    content: <UpcomingGames />,
  },
];

const HighlightedTab: React.FC = () => {
  return (
    <Card isCompact className="mt-4">
      <TabView data={tabData} isFullWidth />
    </Card>
  );
};

export default HighlightedTab;

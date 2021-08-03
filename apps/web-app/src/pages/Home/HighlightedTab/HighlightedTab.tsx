import Card from 'src/components/Card';
import TabView from 'src/components/TabView';
import { TabViewItem } from 'src/components/TabView/TabView';
import NewReleases from './NewReleases';
import UpcomingGames from './UpcomingGames';

const tabData: TabViewItem[] = [
  {
    id: '1',
    title: 'New Releases',
    content: <NewReleases/>
  },
  {
    id: '2',
    title: 'Comming Soon',
    content: <UpcomingGames/>
  },
]

const HighlightedTab: React.FC = () => {
  return (
    <Card isCompact className="mt-4">
      <TabView data={tabData} />
    </Card>
  )
}

export default HighlightedTab

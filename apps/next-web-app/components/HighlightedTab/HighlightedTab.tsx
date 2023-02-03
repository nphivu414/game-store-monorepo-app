import React from 'react';
import { RawgGameResponse } from '@root/data-access';
import { Card, TabView, TabViewItem } from '@root/ui-web';
import NewReleases from './NewReleases';
import UpcomingGames from './UpcomingGames';

type HighlightedTabProps = {
  newReleaseGamedata?: RawgGameResponse;
  upcomingGameData?: RawgGameResponse;
};

const HighlightedTab = ({ newReleaseGamedata, upcomingGameData }: HighlightedTabProps) => {
  const tabData: TabViewItem[] = React.useMemo(() => {
    return [
      {
        id: '1',
        title: 'New Releases',
        content: <NewReleases data={newReleaseGamedata} />,
      },
      {
        id: '2',
        title: 'Up Comming',
        content: <UpcomingGames data={upcomingGameData} />,
      },
    ];
  }, [newReleaseGamedata, upcomingGameData]);

  return (
    <Card isCompact className="mt-4">
      <TabView data={tabData} isFullWidth />
    </Card>
  );
};

export default HighlightedTab;

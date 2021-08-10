import * as React from 'react';
import { Game } from '@game-store-monorepo/data-access';
import TabView from 'src/components/TabView';
import { TabViewItem } from 'src/components/TabView/TabView';
import Screenshots from './Screenshots';
import Videos from './Videos';

type MediaPreviewTabProps = {
  data?: Game;
};

const MediaPreviewTab: React.FC<MediaPreviewTabProps> = ({ data }) => {
  const screenshots = data?.screenshots;
  const trailers = data?.trailers;
  const tabData: TabViewItem[] = React.useMemo(() => {
    return [
      {
        id: '1',
        title: 'Screenshots',
        content: <Screenshots data={screenshots} />,
      },
      {
        id: '2',
        title: 'Trailers & Videos',
        content: <Videos data={trailers} />,
      },
    ];
  }, [screenshots, trailers]);

  if (!data) {
    return null;
  }

  return (
    <div className="w-full mt-4">
      <TabView isFullWidth data={tabData} />
    </div>
  );
};

export default MediaPreviewTab;

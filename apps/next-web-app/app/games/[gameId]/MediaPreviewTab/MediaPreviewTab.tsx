import React from 'react';
import { Game } from '@root/data-access';
import Screenshots from './Screenshots';
import Videos from './Videos';
import { TabView, TabViewItem } from '@root/ui-web';

type MediaPreviewTabProps = {
  data?: Game;
  isLoading?: boolean;
};

const MediaPreviewTab: React.FC<MediaPreviewTabProps> = ({ data, isLoading }) => {
  const screenshots = data?.screenshots;
  const trailers = data?.trailers;
  const tabData: TabViewItem[] = React.useMemo(() => {
    return [
      {
        id: '1',
        title: 'Screenshots',
        content: <Screenshots data={screenshots} isLoading={isLoading} />,
      },
      {
        id: '2',
        title: 'Trailers & Videos',
        content: <Videos data={trailers} isLoading={isLoading} />,
      },
    ];
  }, [isLoading, screenshots, trailers]);

  return (
    <div className="w-full mt-4">
      <TabView isFullWidth data={tabData} />
    </div>
  );
};

export default MediaPreviewTab;

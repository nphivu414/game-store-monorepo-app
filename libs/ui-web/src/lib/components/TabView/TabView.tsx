import React from 'react';
import cn from 'classnames';
import { Button } from '../Button';

type Scene = {
  [key: string]: React.ReactElement;
};

export type TabViewItem = {
  id: string;
  title?: string;
  icon?: React.ReactElement;
  content: React.ReactElement;
};

type TabViewProps = {
  selectedIndex?: number;
  data: TabViewItem[];
  onTabIndexChange?: (selectedIndex: number) => void;
  isFullWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const TabView: React.FC<TabViewProps> = ({
  selectedIndex = 0,
  data,
  onTabIndexChange,
  isFullWidth,
  ...rest
}) => {
  const [selectedSceneIndex, setSelectedSceneIndex] = React.useState(selectedIndex);
  const [scenes, setScenes] = React.useState<Scene>({});

  const tabClass = cn({
    tabs: true,
    'justify-center': true,
    'w-full': isFullWidth,
  });

  React.useEffect(() => {
    const cenes: Scene = {};
    data.forEach((item, index) => {
      cenes[index] = item.content;
    });
    setScenes(cenes);
  }, [data]);

  const handleOnTabChange = (index: number) => {
    return () => {
      setSelectedSceneIndex(index);
      onTabIndexChange && onTabIndexChange(index);
    };
  };

  return (
    <div {...rest}>
      <div className={tabClass}>
        {data.map((tab, index) => {
          const tabClass = cn({
            tab: true,
            'tab-bordered': true,
            'tab-active': index === selectedSceneIndex,
            'border-t-0 border-l-0 border-r-0 rounded-none': true,
            'flex-none': true,
            [`w-1/${data.length}`]: isFullWidth,
          });
          return (
            <Button isLink key={tab.id} className={tabClass} onClick={handleOnTabChange(index)}>
              {tab.icon} <span className="text-xs font-bold">{tab.title}</span>
            </Button>
          );
        })}
      </div>
      <div className="mt-4">{scenes[selectedSceneIndex]}</div>
    </div>
  );
};

import { Box, useThemeColors } from '@game-store-monorepo/ui-native';
import { Tab, TabView } from '@rneui/themed';
import React from 'react';
import NewReleases from './NewReleases';
import Upcoming from './Upcoming';

const HighlightedTab = () => {
  const [index, setIndex] = React.useState(0);
  const { primary, black } = useThemeColors();
  return (
    <Box paddingBottom={15}>
      <Box marginTop={15} minHeight={510}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          variant="primary"
          indicatorStyle={{
            backgroundColor: primary,
          }}
          containerStyle={{
            backgroundColor: 'none',
          }}
        >
          <Tab.Item
            title="New Releases"
            containerStyle={{ backgroundColor: 'none' }}
            buttonStyle={{ backgroundColor: 'none' }}
            titleStyle={{ fontSize: 18, color: black }}
          />
          <Tab.Item
            title="Upcoming"
            containerStyle={{ backgroundColor: 'none' }}
            buttonStyle={{ backgroundColor: 'none' }}
            titleStyle={{ fontSize: 18, color: black }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} containerStyle={{ marginTop: 10 }}>
          <TabView.Item style={{ width: '100%' }}>
            <NewReleases />
          </TabView.Item>
          <TabView.Item style={{ width: '100%' }}>
            <Upcoming />
          </TabView.Item>
        </TabView>
      </Box>
    </Box>
  );
};

export default HighlightedTab;

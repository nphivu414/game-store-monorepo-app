import { Box, Button, useThemeColors } from '@game-store-monorepo/ui-native';
import { Tab, TabView } from '@rneui/themed';
import React from 'react';
import NewReleases from './NewReleases';
import Upcoming from './Upcoming';

const HighlightedTab = () => {
  const [index, setIndex] = React.useState(0);
  const { primary } = useThemeColors();
  return (
    <Box paddingBottom={15}>
      <Box marginTop={15} minHeight={430} paddingX={15}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          variant="primary"
          indicatorStyle={{
            backgroundColor: primary,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          containerStyle={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 10,
            backgroundColor: 'none',
          }}
        >
          <Tab.Item
            title="New Releases"
            containerStyle={{ backgroundColor: 'none' }}
            buttonStyle={{ backgroundColor: 'none' }}
            titleStyle={{ fontSize: 18 }}
          />
          <Tab.Item
            title="Upcoming"
            containerStyle={{ backgroundColor: 'none' }}
            buttonStyle={{ backgroundColor: 'none' }}
            titleStyle={{ fontSize: 18 }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={{ width: '100%' }}>
            <NewReleases />
          </TabView.Item>
          <TabView.Item style={{ width: '100%' }}>
            <Upcoming />
          </TabView.Item>
        </TabView>
      </Box>
      <Box paddingX={30} paddingY={15}>
        <Button title="View All" />
      </Box>
    </Box>
  );
};

export default HighlightedTab;

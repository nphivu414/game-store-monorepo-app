import { Box, Text, useThemeColors } from '@game-store-monorepo/ui-native';
import { Tab, TabView } from '@rneui/themed';
import React from 'react';
import NewReleases from './NewReleases';
import Upcoming from './Upcoming';

const HighlightedTab = () => {
  const [index, setIndex] = React.useState(0);
  const { background, grey5, primary } = useThemeColors();
  return (
    <Box marginTop={15} height={500} paddingX={15}>
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
          backgroundColor: grey5,
        }}
      >
        <Tab.Item
          title="New Releases"
          containerStyle={{ backgroundColor: background }}
          buttonStyle={{ backgroundColor: grey5 }}
          titleStyle={{ fontSize: 16 }}
        />
        <Tab.Item
          title="Upcoming"
          containerStyle={{ backgroundColor: background }}
          buttonStyle={{ backgroundColor: grey5 }}
          titleStyle={{ fontSize: 16 }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item>
          <NewReleases />
        </TabView.Item>
        <TabView.Item>
          <Upcoming />
        </TabView.Item>
      </TabView>
    </Box>
  );
};

export default HighlightedTab;

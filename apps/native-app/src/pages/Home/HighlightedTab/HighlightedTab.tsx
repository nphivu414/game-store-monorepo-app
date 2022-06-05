import { Box, Text } from '@game-store-monorepo/ui-native';
import { Tab, TabView } from '@rneui/themed';
import React from 'react';

const HighlightedTab = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <Box backgroundColor="red" height={500}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Recent"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="favorite"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
      </TabView>
    </Box>
  );
};

export default HighlightedTab;

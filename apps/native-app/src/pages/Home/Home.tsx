import { Button, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView } from 'react-native';
import { Box } from '../../components';

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Box width={300} height={300} backgroundColor="red">
        <Text h1>Homepage</Text>
        <Button title="Solid" />
      </Box>
    </ScrollView>
  );
};

export default Home;

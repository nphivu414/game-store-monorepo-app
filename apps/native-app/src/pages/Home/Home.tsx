import { Button, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView } from 'react-native';
import { Box } from '../../components';
import styled from '../../theme/styled-component';

const StyledTheme = styled.View`
  background-color: ${(props) => props.theme.colors.warning};
  width: 50;
  height: 50;
`;

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Box width={300} height={300} backgroundColor="red">
        <Text h1>Homepage</Text>
        <Button title="Solid" />
        <StyledTheme />
      </Box>
    </ScrollView>
  );
};

export default Home;

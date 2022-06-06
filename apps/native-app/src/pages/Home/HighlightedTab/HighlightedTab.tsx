import { Box } from '@game-store-monorepo/ui-native';
import React from 'react';
import NewReleases from './NewReleases';
import { StyledTab, StyledTabItem, StyledTabView, StyledTabViewItem } from './styles';
import Upcoming from './Upcoming';

const HighlightedTab = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <Box paddingBottom={15}>
      <Box marginTop={20} minHeight={550}>
        <StyledTab value={index} onChange={(e) => setIndex(e)}>
          <StyledTabItem title="New Releases" />
          <StyledTabItem title="Upcoming" />
        </StyledTab>
        <StyledTabView value={index} onChange={setIndex}>
          <StyledTabViewItem>
            <NewReleases />
          </StyledTabViewItem>
          <StyledTabViewItem>
            <Upcoming />
          </StyledTabViewItem>
        </StyledTabView>
      </Box>
    </Box>
  );
};

export default HighlightedTab;

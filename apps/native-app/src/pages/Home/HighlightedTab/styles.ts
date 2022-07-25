import { styled } from '@root/ui-native';
import { TabView } from '@rneui/base';
import { Tab } from '@rneui/themed';

export const StyledTab = styled(Tab).attrs((props) => ({
  indicatorStyle: {
    backgroundColor: props.theme.colors.primary,
  },
  containerStyle: {
    backgroundColor: 'none',
  },
}))``;

export const StyledTabItem = styled(Tab.Item).attrs((props) => ({
  buttonStyle: {
    backgroundColor: 'none',
  },
  containerStyle: {
    backgroundColor: 'none',
  },
  titleStyle: {
    fontSize: 18,
    color: props.theme.colors.black,
    fontWeight: 'bold',
  },
}))``;

export const StyledTabView = styled(TabView).attrs((props) => ({
  containerStyle: {
    marginTop: props.theme.spacing.lg,
  },
}))``;

export const StyledTabViewItem = styled(TabView.Item)`
  width: 100%;
`;

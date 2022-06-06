import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styled } from '../../theme';

export const StyledIcon = styled(MaterialCommunityIcons)`
  color: ${(props) => props.theme.colors.primary};
  margin-left: ${(props) => props.theme.spacing.md}px;
`;

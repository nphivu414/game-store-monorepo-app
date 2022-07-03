import { Box } from '../Box';
import { styled } from '../../theme';

export const Divider = styled(Box)`
  margin-top: ${(props) => props.theme.spacing.md}px;
  margin-bottom: ${(props) => props.theme.spacing.md}px;
`;

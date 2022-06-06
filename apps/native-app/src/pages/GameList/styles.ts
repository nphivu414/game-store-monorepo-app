import { Game } from '@game-store-monorepo/data-access';
import { Box, styled } from '@game-store-monorepo/ui-native';

export const StyledSeparator = styled(Box)`
  margin-top: ${(props) => props.theme.spacing.md}px;
  margin-bottom: ${(props) => props.theme.spacing.md}px;
`;

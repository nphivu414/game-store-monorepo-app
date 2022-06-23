import { styled } from '@game-store-monorepo/ui-native';
import { Card } from '@rneui/themed';

type GameCardProps = {
  width?: number;
  height?: number;
};

export const StyledGameCard = styled(Card).attrs<GameCardProps>((props) => ({
  containerStyle: {
    width: props.width,
    height: props.height,
    backgroundColor: props.theme.colors.grey5,
    padding: 0,
    borderWidth: 0,
    borderRadius: 10,
    marginTop: 0,
    marginLeft: 0,
  },
}))<GameCardProps>``;

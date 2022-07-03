import { styled } from '@game-store-monorepo/ui-native';
import { Card } from '@rneui/themed';

type GenreCardCardProps = {
  width?: number;
  height?: number;
};

export const StyledGenreCard = styled(Card).attrs<GenreCardCardProps>((props) => ({
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
}))<GenreCardCardProps>``;

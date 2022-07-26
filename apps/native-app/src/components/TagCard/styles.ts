import { styled } from '@root/ui-native';
import { Card } from '@rneui/themed';

type TagCardProps = {
  width?: number;
  height?: number;
};

export const StyledTagCard = styled(Card).attrs<TagCardProps>((props) => ({
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
}))<TagCardProps>``;

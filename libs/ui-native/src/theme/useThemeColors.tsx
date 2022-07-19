import { useTheme } from '@rneui/themed';

export const useThemeColors = () => {
  const {
    theme: { colors },
  } = useTheme();

  return colors;
};

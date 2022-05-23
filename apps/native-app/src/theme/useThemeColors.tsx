import { useTheme } from '@rneui/themed';

const useThemeColors = () => {
  const {
    theme: { colors },
  } = useTheme();

  return colors;
};

export default useThemeColors;

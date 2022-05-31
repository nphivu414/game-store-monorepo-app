import React from 'react';
import * as styledComponents from 'styled-components/native';
import { useTheme, Theme, Colors } from '@rneui/themed';

type StyledThemeProviderProps = {
  children: React.ReactNode;
};

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  {
    colors: Colors;
  } & Theme
>;

const StyledThemeProvider = ({ children }: StyledThemeProviderProps) => {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { css, StyledThemeProvider };
export default styled;

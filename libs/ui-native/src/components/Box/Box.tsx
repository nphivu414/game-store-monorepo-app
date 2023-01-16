import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  alignItems,
  AlignItemsProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  minHeight,
  MinHeightProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { styled } from '../../theme/styled-component';

export type BoxStyledProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps &
  AlignItemsProps &
  MinHeightProps;

const InnerBox: React.FC<ViewProps> = ({ children, ...rest }) => {
  return <View {...rest}>{children}</View>;
};

export const Box = styled(InnerBox)<BoxStyledProps>`
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${border}
  ${position}
  ${typography}
  ${alignItems}
  ${minHeight}
`;

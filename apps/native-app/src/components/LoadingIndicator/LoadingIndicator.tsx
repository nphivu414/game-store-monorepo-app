import * as React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
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
import useThemeColors from '../../theme';
import styled from '../../theme/styled-component';

type LoadingIndicatorProps = ActivityIndicatorProps;

export type LoadingIndicatorStyledProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  TypographyProps &
  AlignItemsProps &
  MinHeightProps;

const InnerLoadingIndicator: React.FC<LoadingIndicatorProps> = ({ ...props }) => {
  const { primary } = useThemeColors();
  return <ActivityIndicator color={primary} {...props} />;
};

export const LoadingIndicator = styled(InnerLoadingIndicator)<LoadingIndicatorStyledProps>`
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

export default LoadingIndicator;

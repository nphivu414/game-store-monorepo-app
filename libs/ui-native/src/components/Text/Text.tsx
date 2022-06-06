import React from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from '@rneui/themed';
import { styled } from '../../theme/styled-component';
import {
  alignItems,
  AlignItemsProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type TextStyledProps = SpaceProps & ColorProps & LayoutProps & PositionProps & TypographyProps & AlignItemsProps;

export type TextProps = BaseTextProps;

const InnerText = (props: TextProps) => {
  return <BaseText {...props} />;
};

export const Text = styled(InnerText)<TextStyledProps>`
  ${color}
  ${layout}
  ${space}
  ${position}
  ${typography}
  ${alignItems}
`;

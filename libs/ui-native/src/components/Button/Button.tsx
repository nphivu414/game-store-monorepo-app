import React from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@rneui/themed';
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

export type ButtonStyledProps = SpaceProps &
  ColorProps &
  LayoutProps &
  PositionProps &
  TypographyProps &
  AlignItemsProps;

export type ButtonProps = BaseButtonProps;

const InnerButton = (props: ButtonProps) => {
  return <BaseButton radius="md" {...props} />;
};

export const Button = styled(InnerButton)<ButtonStyledProps>`
  ${color}
  ${layout}
  ${space}
  ${position}
  ${typography}
  ${alignItems}
`;

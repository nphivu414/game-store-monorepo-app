import React from 'react';
import { Platform } from '@root/data-access';
import { Box, BoxStyledProps } from '../Box';
import { ViewProps } from 'react-native';
import { StyledIcon } from './styles';

type PlatformLogosProps = {
  data?: Platform[];
  amount?: number;
} & BoxStyledProps &
  ViewProps;

type LogoMap = {
  [key: number]: React.ReactElement;
};

const logoMap: LogoMap = {
  1: <StyledIcon name="desktop-mac" size={14} />,
  2: <StyledIcon name="sony-playstation" size={14} />,
  3: <StyledIcon name="microsoft-xbox" size={14} />,
  4: <StyledIcon name="apple-ios" size={14} />,
  5: <StyledIcon name="apple" size={14} />,
  6: <StyledIcon name="linux" size={14} />,
  7: <StyledIcon name="nintendo-switch" size={14} />,
  8: <StyledIcon name="android" size={14} />,
  14: <StyledIcon name="earth" size={14} />,
};

export const PlatformLogos: React.FC<PlatformLogosProps> = ({ data, amount = 5, ...rest }) => {
  if (!data) {
    return null;
  }

  const renderPlatFormLogos = (data: Platform[]) => {
    return data.map((platform) => {
      const platformId = platform.platform.id;
      return <Box key={platformId}>{logoMap[platformId]}</Box>;
    });
  };

  return (
    <Box flexDirection="row" {...rest}>
      {amount ? renderPlatFormLogos(data.slice(0, amount)) : renderPlatFormLogos(data)}
    </Box>
  );
};

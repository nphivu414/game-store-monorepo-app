import React from 'react';
import { Genre } from '@root/data-access';
import { StyledTagCard } from './styles';
import { Card } from '@rneui/themed';
import { Box, Text } from '@root/ui-native';
import { getMultipleItemNames } from '@root/utils';

type TagCardProps = {
  data?: Genre;
  width?: number;
  height?: number;
};

export const TagCard = ({ data, height, width }: TagCardProps) => {
  if (!data) {
    return null;
  }

  const { thumbnailImage, name, games } = data;

  return (
    <StyledTagCard width={width} height={height}>
      <Card.Image
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        transition
        source={{
          uri: thumbnailImage,
        }}
      />
      <Box padding={10}>
        <Card.FeaturedTitle numberOfLines={1}>
          <Text fontSize={16}>{name}</Text>
        </Card.FeaturedTitle>
        <Card.FeaturedSubtitle numberOfLines={2}>
          <Text>{getMultipleItemNames(games)}</Text>
        </Card.FeaturedSubtitle>
      </Box>
    </StyledTagCard>
  );
};

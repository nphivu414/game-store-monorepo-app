import React from 'react';
import { Genre } from '@game-store-monorepo/data-access';
import { StyledGenreCard } from './styles';
import { Card } from '@rneui/themed';
import { Box, Text } from '@game-store-monorepo/ui-native';
import { getMultipleItemNames } from '@game-store-monorepo/util';

type GenreCardProps = {
  data?: Genre;
  width?: number;
  height?: number;
};

export const GenreCard = ({ data, height, width }: GenreCardProps) => {
  if (!data) {
    return null;
  }

  const { thumbnailImage, name, games } = data;

  return (
    <StyledGenreCard width={width} height={height}>
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
    </StyledGenreCard>
  );
};

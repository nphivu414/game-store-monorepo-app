import React from 'react';
import { Game } from '@game-store-monorepo/data-access';
import { StyledGameCard } from './styles';
import { Card } from '@rneui/themed';
import { Box, Text, PlatformLogos } from '@game-store-monorepo/ui-native';
import { getMultipleItemNames } from '@game-store-monorepo/util';

type GameCardProps = {
  data?: Game;
  width?: number;
  height?: number;
};

export const GameCard = ({ data, height, width }: GameCardProps) => {
  if (!data) {
    return null;
  }

  const { thumbnailImage, name, genres, parentPlatforms } = data;

  return (
    <StyledGameCard width={width} height={height}>
      <Card.Image
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        source={{
          uri: thumbnailImage,
        }}
      />
      <Box padding={10}>
        <Card.FeaturedTitle numberOfLines={1}>
          <Text fontSize={16}>{name}</Text>
        </Card.FeaturedTitle>
        <PlatformLogos data={parentPlatforms} marginBottom={10} />
        <Card.FeaturedSubtitle numberOfLines={1}>
          <Text>{getMultipleItemNames(genres, 3)}</Text>
        </Card.FeaturedSubtitle>
      </Box>
    </StyledGameCard>
  );
};

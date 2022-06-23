import { useQuery } from '@apollo/client';
import { GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { GET_GAMES } from '@game-store-monorepo/graphql-client';
import { Box, Button, LoadingIndicator, PlatformLogos, Text } from '@game-store-monorepo/ui-native';
import { getMultipleItemNames } from '@game-store-monorepo/util';
import { Avatar, ListItem } from '@rneui/themed';
import React from 'react';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 5,
    dates: '2021-08-31,2021-12-31',
    ordering: '-added',
  },
};

const Upcoming = () => {
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);

  if (!data) {
    return null;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      {data.allGames.results.map((game, index) => {
        return (
          <ListItem key={index} bottomDivider>
            <Avatar rounded size="medium" source={{ uri: game.thumbnailImage }} />
            <ListItem.Content>
              <ListItem.Title>
                <Text fontWeight="bold">{game.name}</Text>
              </ListItem.Title>
              <PlatformLogos marginTop={10} data={game.parentPlatforms} marginBottom={10} />
              <ListItem.Subtitle>
                <Text>{getMultipleItemNames(game.genres, 3)}</Text>
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron type="ionicon" name="chevron-forward" />
          </ListItem>
        );
      })}
      <ListItem>
        <Box width="100%">
          <Button title="View All" />
        </Box>
      </ListItem>
    </>
  );
};

export default Upcoming;

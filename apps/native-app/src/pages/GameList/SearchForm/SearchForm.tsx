import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GamesQueryParams, SearchGamesQueryResponse } from '@game-store-monorepo/data-access';
import { SEARCH_GAMES } from '@game-store-monorepo/graphql-client';
import { getMultipleItemNames, useDebounce } from '@game-store-monorepo/util';
import { Box, SearchBar, Text, useThemeColors } from '@game-store-monorepo/ui-native';
import { Avatar, ListItem } from '@rneui/themed';
import { Platform, ScrollView } from 'react-native';
import { Portal } from '@gorhom/portal';
import { useHeaderHeight } from '@react-navigation/elements';

const SEARCH_BAR_HEIGHT = Platform.OS === 'ios' ? 70 : 55;

const SearchForm: React.FC = () => {
  const { background } = useThemeColors();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchVisible, setSearchVisible] = React.useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [searchGames, { data, loading }] = useLazyQuery<SearchGamesQueryResponse>(SEARCH_GAMES);
  const headerHeight = useHeaderHeight();
  const searchResultTopPosition = headerHeight + SEARCH_BAR_HEIGHT;

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  }, [debouncedSearchTerm]);

  React.useEffect(() => {
    if (!debouncedSearchTerm) {
      return;
    }

    const queryParams: GamesQueryParams = {
      variables: {
        page: 1,
        pageSize: 10,
        search: debouncedSearchTerm,
      },
    };
    searchGames(queryParams);
  }, [debouncedSearchTerm, searchGames, searchVisible]);

  const results = data?.searchGames?.results;

  const handleChange = (text: string) => {
    setSearchTerm(text);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchVisible(false);
    }, 200);
  };

  const handleFocus = () => {
    if (!results?.length) {
      return;
    }
    setSearchVisible(true);
  };

  const onClear = () => {
    console.log('🚀 ~ file: SearchForm.tsx ~ line 68 ~ onClear ~ onClear');
    setSearchTerm('');
  };
  const onCancel = () => {
    setSearchVisible(false);
  };

  const onItemClick = () => {};

  // const onSearchButtonClick = () => {
  //   navigate(`${ROUTES.GAMES}?search=${searchTerm}`);
  // };

  return (
    <Box position="relative" zIndex={10}>
      <Box height={SEARCH_BAR_HEIGHT}>
        <SearchBar
          value={searchTerm}
          onChangeText={handleChange}
          onClear={onClear}
          onCancel={onCancel}
          placeholder="Search games..."
          onBlur={handleBlur}
          onFocus={handleFocus}
          showLoading={loading}
        />
      </Box>
      <Portal>
        <Box
          position="absolute"
          top={searchResultTopPosition}
          width={1}
          height={400}
          style={{
            display: searchVisible ? 'flex' : 'none',
          }}
        >
          <ScrollView
            style={{
              backgroundColor: background,
            }}
          >
            {results?.map((game, index) => {
              return (
                <ListItem key={index} bottomDivider>
                  <Avatar rounded size="medium" source={{ uri: game.thumbnailImage }} />
                  <ListItem.Content>
                    <ListItem.Title>
                      <Text fontWeight="bold">{game.name}</Text>
                    </ListItem.Title>
                    {/* <PlatformLogos marginTop={10} data={game.parentPlatforms} marginBottom={10} /> */}
                    <ListItem.Subtitle>
                      <Text>{getMultipleItemNames(game.genres, 3)}</Text>
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron type="ionicon" name="chevron-forward" />
                </ListItem>
              );
            })}
          </ScrollView>
        </Box>
      </Portal>
    </Box>
  );
};

export default SearchForm;

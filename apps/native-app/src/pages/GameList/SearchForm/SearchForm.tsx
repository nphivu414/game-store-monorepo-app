import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GamesQueryParams, SearchGamesQueryResponse } from '@root/data-access';
import { SEARCH_GAMES } from '@root/graphql-client';
import { getMultipleItemNames, useDebounce } from '@root/utils';
import { Box, PlatformLogos, SearchBar, Text, useThemeColors } from '@root/ui-native';
import { Avatar, ListItem } from '@rneui/themed';
import { Dimensions, Platform, ScrollView } from 'react-native';
import { Portal } from '@gorhom/portal';
import { useHeaderHeight } from '@react-navigation/elements';
import { useKeyboard } from '@react-native-community/hooks';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const SEARCH_BAR_HEIGHT = Platform.OS === 'ios' ? 70 : 55;
const RESULT_BOX_PADDING = 80;

const SearchForm: React.FC = () => {
  const { background } = useThemeColors();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchVisible, setSearchVisible] = React.useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [searchGames, { data, loading }] = useLazyQuery<SearchGamesQueryResponse>(SEARCH_GAMES);
  const headerHeight = useHeaderHeight();
  const searchResultTopPosition = headerHeight + SEARCH_BAR_HEIGHT;
  const searchResultOpacity = useSharedValue(0);
  const searchResultAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(searchResultOpacity.value, {
        duration: 300,
      }),
    };
  });
  const { keyboardHeight } = useKeyboard();
  const getSearchBoxHeight = () => {
    let height = Dimensions.get('screen').height - (keyboardHeight + searchResultTopPosition);
    if (Platform.OS === 'android') {
      height -= RESULT_BOX_PADDING;
    }
    return height;
  };

  const showSearchResult = React.useCallback(() => {
    searchResultOpacity.value = 1;
    setSearchVisible(true);
  }, [searchResultOpacity]);

  const hideSearchResult = React.useCallback(() => {
    searchResultOpacity.value = 0;
    setTimeout(() => {
      setSearchVisible(false);
    }, 200);
  }, [searchResultOpacity]);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      showSearchResult();
    } else {
      hideSearchResult();
    }
  }, [debouncedSearchTerm, hideSearchResult, showSearchResult]);

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
    hideSearchResult();
  };

  const handleFocus = () => {
    if (!results?.length) {
      return;
    }
    showSearchResult();
  };

  const onClear = () => {
    setSearchTerm('');
  };
  const onCancel = () => {
    hideSearchResult();
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
          height={getSearchBoxHeight()}
          style={{
            display: searchVisible ? 'flex' : 'none',
          }}
        >
          <Animated.ScrollView
            style={[
              {
                backgroundColor: background,
              },
              searchResultAnimatedStyle,
            ]}
          >
            {results?.map((game, index) => {
              return (
                <ListItem key={index} bottomDivider>
                  <Avatar
                    imageProps={{ transition: true }}
                    rounded
                    size="medium"
                    source={{ uri: game.thumbnailImage }}
                  />
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
          </Animated.ScrollView>
        </Box>
      </Portal>
    </Box>
  );
};

export default SearchForm;

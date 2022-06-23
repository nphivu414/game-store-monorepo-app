import React from 'react';
import { SearchBar as BaseSearchBar, SearchBarProps as BaseSearchBarProps } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useThemeColors } from '../../theme';
import { Platform } from 'react-native';

type SearchBarProps = {
  onCancel?: () => void;
  onClear?: () => void;
} & BaseSearchBarProps;

export const SearchBar = (props: SearchBarProps) => {
  const { grey2 } = useThemeColors();
  return (
    <BaseSearchBar
      round
      placeholder="Search"
      placeholderTextColor={grey2}
      platform={Platform.OS === 'ios' ? 'ios' : 'android'}
      searchIcon={<Ionicons name="search" size={18} color={grey2} />}
      clearIcon={<Ionicons name="close" size={18} color={grey2} onPress={props.onClear} />}
      cancelIcon={<Ionicons name="chevron-back" size={18} color={grey2} onPress={props.onCancel} />}
      cancelButtonProps={{ onPress: props.onCancel }}
      {...props}
    />
  );
};

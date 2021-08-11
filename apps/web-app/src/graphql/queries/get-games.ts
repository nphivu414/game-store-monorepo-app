import { gql } from '@apollo/client';
import { CORE_GAME_FIELDS, CORE_GENRE_FIELDS } from '../fragments';

export const GET_GAMES = gql`
  ${CORE_GAME_FIELDS}
  ${CORE_GENRE_FIELDS}
  query GET_GAMES(
    $page: Int
    $pageSize: Int
    $dates: String
    $ordering: String
    $tags: String
    $genres: String
    $search: String
  ) {
    allGames(
      page: $page
      pageSize: $pageSize
      dates: $dates
      ordering: $ordering
      tags: $tags
      genres: $genres
      search: $search
    ) {
      count
      nextPage
      results {
        ...CoreGameFields
        genres {
          ...CoreGenreFields
        }
      }
    }
  }
`;

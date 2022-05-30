import { gql } from '@apollo/client';
import { CORE_GAME_FIELDS, CORE_GENRE_FIELDS } from '@game-store-monorepo/graphql-client';

export const SEARCH_GAMES = gql`
  ${CORE_GAME_FIELDS}
  ${CORE_GENRE_FIELDS}
  query SEARCH_GAMES($page: Int, $pageSize: Int, $search: String) {
    searchGames(page: $page, pageSize: $pageSize, search: $search) {
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

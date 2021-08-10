import { gql } from '@apollo/client';
import { CORE_GAME_FIELDS } from '../fragments';

export const GET_GAMES = gql`
  ${CORE_GAME_FIELDS}
  query GET_GAMES($page: Int, $pageSize: Int, $dates: String, $ordering: String) {
    allGames(page: $page, pageSize: $pageSize, dates: $dates, ordering: $ordering) {
      count
      nextPage
      results {
        ...CoreGameFields
      }
    }
  }
`;

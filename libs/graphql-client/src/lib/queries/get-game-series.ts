import { gql } from '@apollo/client';
import { CORE_GAME_FIELDS } from '@game-store-monorepo/graphql-client';

export const GET_GAME_SERIES = gql`
  ${CORE_GAME_FIELDS}
  query GET_GAME_SERIES($id: Int!, $page: Int, $pageSize: Int) {
    gameSeries(id: $id, page: $page, pageSize: $pageSize) {
      nextPage
      results {
        ...CoreGameFields
      }
    }
  }
`;

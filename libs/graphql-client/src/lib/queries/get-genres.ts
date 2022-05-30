import { gql } from '@apollo/client';
import { CORE_GENRE_FIELDS } from '@game-store-monorepo/graphql-client';

export const GET_GENRES = gql`
  ${CORE_GENRE_FIELDS}
  query GET_GENRES($page: Int, $pageSize: Int) {
    allGenres(page: $page, pageSize: $pageSize) {
      count
      nextPage
      results {
        ...CoreGenreFields
        thumbnailImage
        games {
          id
          name
        }
      }
    }
  }
`;

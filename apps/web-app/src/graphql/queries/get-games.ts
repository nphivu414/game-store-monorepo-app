import { gql } from '@apollo/client';

export const GET_GAMES = gql`
  query GET_GAMES($page: Int, $pageSize: Int, $dates: String, $ordering: String) {
    allGames(page: $page, pageSize: $pageSize, dates: $dates, ordering: $ordering) {
      count
      nextPage
      results {
        id
        name
        thumbnailImage
        parentPlatforms {
          platform {
            id
            name
          }
        }
        genres {
          id
          name
        }
      }
    }
  }
`;

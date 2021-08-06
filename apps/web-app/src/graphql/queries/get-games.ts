import { gql } from '@apollo/client';

export const GET_GAMES = gql`
  query GET_GAMES($page: Int, $pageSize: Int, $dates: String, $ordering: String) {
    allGames(page: $page, pageSize: $pageSize, dates: $dates, ordering: $ordering) {
      id
      name
      backgroundImage
      platforms {
        platform {
          name
        }
      }
    }
  }
`;

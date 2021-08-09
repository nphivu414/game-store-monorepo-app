import { gql } from '@apollo/client';

export const GET_GAME_DETAILS = gql`
  query GET_GAME_DETAILS($id: Int!) {
    gameDetails(id: $id) {
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
`;

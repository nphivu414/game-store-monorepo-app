import { gql } from '@apollo/client';

export const GET_GAME_DETAILS = gql`
  query GET_GAME_DETAILS($id: Int!) {
    gameDetails(id: $id) {
      id
      name
      backgroundImage
      thumbnailImage
      backgroundImageAdditional
      rating
      platforms {
        platform {
          id
          name
          image
          imageBackground
        }
        releasedAt
      }
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
      esrbRating {
        name
      }
      publishers {
        id
        name
      }
      stores {
        id
        store {
          id
          name
          domain
          imageBackground
        }
      }
    }
  }
`;

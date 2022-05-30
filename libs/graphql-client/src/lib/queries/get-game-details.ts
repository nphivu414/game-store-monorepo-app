import { gql } from '@apollo/client';
import {
  CORE_ESRB_FIELDS,
  CORE_GAME_FIELDS,
  CORE_GENRE_FIELDS,
  CORE_PUBLISHER_FIELDS,
  CORE_SCREENSHOT_FIELDS,
  CORE_STORE_FIELDS,
  CORE_TAG_FIELDS,
  CORE_TRAILER_FIELDS,
} from '@game-store-monorepo/graphql-client';

export const GET_GAME_DETAILS = gql`
  ${CORE_GAME_FIELDS}
  ${CORE_ESRB_FIELDS}
  ${CORE_PUBLISHER_FIELDS}
  ${CORE_STORE_FIELDS}
  ${CORE_SCREENSHOT_FIELDS}
  ${CORE_TRAILER_FIELDS}
  ${CORE_TAG_FIELDS}
  ${CORE_GENRE_FIELDS}
  query GET_GAME_DETAILS($id: Int!) {
    gameDetails(id: $id) {
      ...CoreGameFields
      thumbnailImageAdditional
      description
      esrbRating {
        ...CoreEsrbFields
      }
      publishers {
        ...CorePublisherFields
      }
      stores {
        ...CoreStoreFields
      }
      screenshots {
        ...CoreScreenshotFields
      }
      trailers {
        ...CoreTrailerFields
      }
      tags {
        ...CoreTagFields
      }
      genres {
        ...CoreGenreFields
        slug
      }
    }
  }
`;

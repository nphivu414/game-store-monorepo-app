import { gql } from '@apollo/client';
import { CORE_GENRE_FIELDS } from './genre-fields';
import { CORE_PLATFORM_FIELDS } from './platform-fields';

export const CORE_GAME_FIELDS = gql`
  ${CORE_PLATFORM_FIELDS}
  ${CORE_GENRE_FIELDS}
  fragment CoreGameFields on Game {
    id
    name
    backgroundImage
    thumbnailImage
    rating
    metacritic
    parentPlatforms {
      ...CorePlatformFields
    }
    genres {
      ...CoreGenreFields
    }
  }
`;

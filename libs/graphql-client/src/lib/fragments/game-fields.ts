import { gql } from '@apollo/client';
import { CORE_PLATFORM_FIELDS } from './platform-fields';

export const CORE_GAME_FIELDS = gql`
  ${CORE_PLATFORM_FIELDS}
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
  }
`;

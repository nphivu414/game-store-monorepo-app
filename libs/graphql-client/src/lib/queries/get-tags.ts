import { gql } from '@apollo/client';
import { CORE_TAG_FIELDS } from '../fragments';

export const GET_TAGS = gql`
  ${CORE_TAG_FIELDS}
  query GET_TAGS($page: Int, $pageSize: Int) {
    allTags(page: $page, pageSize: $pageSize) {
      count
      nextPage
      results {
        ...CoreTagFields
        thumbnailImage
        games {
          id
          name
        }
      }
    }
  }
`;

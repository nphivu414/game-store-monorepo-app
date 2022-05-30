import { gql } from '@apollo/client';
import { CORE_PUBLISHER_FIELDS } from '@game-store-monorepo/graphql-client';

export const GET_PUBLISHERS = gql`
  ${CORE_PUBLISHER_FIELDS}
  query GET_PUBLISHERS($page: Int, $pageSize: Int) {
    allPublishers(page: $page, pageSize: $pageSize) {
      count
      nextPage
      results {
        ...CorePublisherFields
        thumbnailImage
        games {
          id
          name
        }
      }
    }
  }
`;

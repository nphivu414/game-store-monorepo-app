import { gql } from '@apollo/client';

export const CORE_PUBLISHER_FIELDS = gql`
  fragment CorePublisherFields on Publisher {
    id
    name
  }
`;

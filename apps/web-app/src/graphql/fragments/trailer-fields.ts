import { gql } from '@apollo/client';

export const CORE_TRAILER_FIELDS = gql`
  fragment CoreTrailerFields on Trailer {
    id
    name
    preview
    data {
      thumbnail
      max
    }
  }
`;

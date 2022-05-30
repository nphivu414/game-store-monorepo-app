import { gql } from '@apollo/client';

export const CORE_ESRB_FIELDS = gql`
  fragment CoreEsrbFields on EsrbRating {
    id
    name
  }
`;

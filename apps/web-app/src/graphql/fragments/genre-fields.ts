import { gql } from '@apollo/client';

export const CORE_GENRE_FIELDS = gql`
  fragment CoreGenreFields on Genre {
    id
    name
  }
`;

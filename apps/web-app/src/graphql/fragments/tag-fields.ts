import { gql } from '@apollo/client';

export const CORE_TAG_FIELDS = gql`
  fragment CoreTagFields on Tag {
    id
    name
    slug
    gamesCount
    imageBackground
  }
`;

import { gql } from '@apollo/client';

export const CORE_STORE_FIELDS = gql`
  fragment CoreStoreFields on Store {
    id
    store {
      id
      name
      domain
      imageBackground
    }
  }
`;

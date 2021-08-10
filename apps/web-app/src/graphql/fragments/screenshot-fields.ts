import { gql } from '@apollo/client';

export const CORE_SCREENSHOT_FIELDS = gql`
  fragment CoreScreenshotFields on Screenshot {
    id
    image
  }
`;

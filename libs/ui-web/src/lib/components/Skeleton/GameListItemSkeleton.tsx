import React from 'react';
import ContentLoader from 'react-content-loader';

const GameListItemSkeleton: React.FC = () => {
  return (
    <ContentLoader height={80} speed={2} backgroundColor={'#979797'} foregroundColor={'#aeaeae'}>
      <circle cx="30" cy="25" r="20" />
      <rect x="60" y="0" rx="4" ry="4" width="50%" height="7" />
      <rect x="60" y="20" rx="4" ry="4" width="45%" height="7" />
      <rect x="60" y="40" rx="4" ry="4" width="35%" height="7" />
    </ContentLoader>
  );
};

export default GameListItemSkeleton;

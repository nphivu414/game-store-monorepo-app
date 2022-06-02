import * as React from 'react';
import ContentLoader from 'react-content-loader';

const GameCardItemSkeleton: React.FC = () => {
  return (
    <ContentLoader height={225} speed={2} backgroundColor={'#979797'} foregroundColor={'#aeaeae'}>
      <rect x="0" y="0" rx="15" ry="15" radius="20" width="72%" height="125" />
      <rect x="10" y="145" rx="4" ry="4" width="60%" height="7" />
      <rect x="10" y="165" rx="4" ry="4" width="45%" height="7" />
      <rect x="10" y="185" rx="4" ry="4" width="35%" height="7" />
    </ContentLoader>
  );
};

export default GameCardItemSkeleton;

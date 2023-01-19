import * as React from 'react';
import ContentLoader from 'react-content-loader';

const BasicRect: React.FC = () => {
  return (
    <ContentLoader height={170} speed={2} backgroundColor={'#979797'} foregroundColor={'#aeaeae'}>
      <rect x="0" y="0" rx="15" ry="15" radius="20" width="95%" height="170" />
    </ContentLoader>
  );
};

export default BasicRect;

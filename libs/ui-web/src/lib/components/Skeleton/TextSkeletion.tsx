import * as React from 'react';
import ContentLoader from 'react-content-loader';

const TextSkeleton: React.FC = () => {
  return (
    <ContentLoader speed={2} width="100%" height={84} backgroundColor={'#979797'} foregroundColor={'#aeaeae'}>
      <rect x="0" y="0" rx="3" ry="3" width="67" height="7" />
      <rect x="76" y="0" rx="3" ry="3" width="140" height="7" />
      <rect x="127" y="48" rx="3" ry="3" width="53" height="7" />
      <rect x="187" y="48" rx="3" ry="3" width="72" height="7" />
      <rect x="18" y="48" rx="3" ry="3" width="100" height="7" />
      <rect x="0" y="71" rx="3" ry="3" width="37" height="7" />
      <rect x="18" y="23" rx="3" ry="3" width="140" height="7" />
      <rect x="166" y="23" rx="3" ry="3" width="173" height="7" />
    </ContentLoader>
  );
};

export default TextSkeleton;

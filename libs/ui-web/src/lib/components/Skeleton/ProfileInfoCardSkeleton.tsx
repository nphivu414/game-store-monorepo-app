import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfileInfoCardSkeleton: React.FC = () => {
  return (
    <ContentLoader speed={2} width="100%" viewBox="0 0 400 415" backgroundColor="#979797" foregroundColor="#aeaeae">
      <rect x="0" y="0" rx="2" ry="2" width="100%" height="200" />
      <circle cx="50%" cy="190" r="55" color="red" />
      <rect x="20%" y="265" rx="4" ry="4" width="248" height="5" />
      <rect x="32%" y="285" rx="4" ry="4" width="150" height="5" />
      <rect x="20%" y="320" rx="4" ry="4" width="248" height="5" />
      <rect x="20%" y="335" rx="4" ry="4" width="248" height="5" />
      <rect x="5%" y="370" rx="4" ry="4" width="90%" height="5" />
      <rect x="5%" y="390" rx="4" ry="4" width="90%" height="5" />
      <rect x="5%" y="410" rx="4" ry="4" width="90%" height="5" />
    </ContentLoader>
  );
};

export default ProfileInfoCardSkeleton;

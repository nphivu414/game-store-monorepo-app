import * as React from 'react';
import ContentLoader, { Facebook, Instagram, Code, List, BulletList, IContentLoaderProps } from 'react-content-loader';
import { useTransition, animated } from 'react-spring';

type SkeletonProps = IContentLoaderProps & {
  isLoading?: boolean;
  theme?: 'FACEBOOK' | 'INSTAGRAM' | 'CODE' | 'LIST' | 'BULLET_LIST' | 'GAME_LIST_ITEM' | 'GAME_CARD_ITEM';
};

const Skeleton: React.FC<SkeletonProps> = ({ isLoading = true, theme, children }) => {
  const transitions = useTransition(isLoading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });

  const renderContentLoader = () => {
    switch (theme) {
      case 'FACEBOOK':
        return <Facebook />;
      case 'INSTAGRAM':
        return <Instagram />;
      case 'CODE':
        return <Code />;
      case 'LIST':
        return <List />;
      case 'BULLET_LIST':
        return <BulletList />;
      case 'GAME_LIST_ITEM':
        return (
          <ContentLoader height={80} speed={2} backgroundColor={'#333'} foregroundColor={'#999'}>
            <circle cx="30" cy="25" r="20" />
            <rect x="60" y="0" rx="4" ry="4" width="50%" height="7" />
            <rect x="60" y="20" rx="4" ry="4" width="45%" height="7" />
            <rect x="60" y="40" rx="4" ry="4" width="35%" height="7" />
          </ContentLoader>
        );
      case 'GAME_CARD_ITEM':
        return (
          <ContentLoader height={225} speed={2} backgroundColor={'#333'} foregroundColor={'#999'}>
            <rect x="0" y="0" rx="0" ry="2" radius="20" width="72%" height="125" />
            <rect x="10" y="145" rx="4" ry="4" width="60%" height="7" />
            <rect x="10" y="165" rx="4" ry="4" width="45%" height="7" />
            <rect x="10" y="185" rx="4" ry="4" width="35%" height="7" />
          </ContentLoader>
        );
      default:
        return null;
    }
  };

  return transitions(({ opacity }, item) => {
    return item ? (
      <animated.div
        style={{
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        {renderContentLoader()}
      </animated.div>
    ) : (
      <animated.div
        style={{
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        {children}
      </animated.div>
    );
  });
};

export default Skeleton;

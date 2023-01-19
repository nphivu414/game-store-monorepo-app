import * as React from 'react';
import { Facebook, Instagram, Code, List, BulletList, IContentLoaderProps } from 'react-content-loader';
import { useTransition, animated } from 'react-spring';
import BasicRect from './BasicRect';
import GameCardItemSkeleton from './GameCardItemSkeleton';
import GameListItemSkeleton from './GameListItemSkeleton';
import ProfileInfoCardSkeleton from './ProfileInfoCardSkeleton';
import TextSkeleton from './TextSkeletion';

export type SkeletonProps = IContentLoaderProps & {
  isLoading?: boolean;
  theme?:
    | 'FACEBOOK'
    | 'INSTAGRAM'
    | 'CODE'
    | 'LIST'
    | 'BULLET_LIST'
    | 'GAME_LIST_ITEM'
    | 'GAME_CARD_ITEM'
    | 'PROFILE_INFO_CARD'
    | 'TEXT'
    | 'BASIC_RECT';
};

export const Skeleton: React.FC<SkeletonProps> = ({ isLoading = true, theme, children }) => {
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
        return <Code height={50} backgroundColor="#979797" foregroundColor="#aeaeae" />;
      case 'LIST':
        return <List />;
      case 'BULLET_LIST':
        return <BulletList />;
      case 'GAME_LIST_ITEM':
        return <GameListItemSkeleton />;
      case 'GAME_CARD_ITEM':
        return <GameCardItemSkeleton />;
      case 'PROFILE_INFO_CARD':
        return <ProfileInfoCardSkeleton />;
      case 'TEXT':
        return <TextSkeleton />;
      case 'BASIC_RECT':
        return <BasicRect />;
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

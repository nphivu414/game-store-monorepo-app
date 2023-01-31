import { Game } from '@root/data-access';
import { Button, PlatformLogos, Skeleton } from '@root/ui-web';
import { getMultipleItemNames } from '@root/utils';
import Image from 'next/image';
import * as React from 'react';

type GeneralInformationProps = {
  data?: Game;
  isLoading?: boolean;
};

const GeneralInformation: React.FC<GeneralInformationProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return <Skeleton theme="PROFILE_INFO_CARD" />;
  }

  if (!data) {
    return null;
  }

  const {
    thumbnailImage,
    thumbnailImageAdditional,
    name,
    parentPlatforms,
    stores,
    esrbRating,
    metacritic,
    genres,
    publishers,
  } = data;

  const onStoreButtonClick = (domain?: string) => {
    return () => {
      window.open(`https://${domain}`, '_blank');
    };
  };

  const renderStores = () => {
    if (!stores) {
      return null;
    }

    return (
      <div className="flex overflow-x-auto max-w-[100%] py-2 my-2">
        {stores.map(({ store: { id, name, domain } }) => {
          return (
            <Button
              key={id}
              className="flex-none ml-2 last:mr-2"
              isOutline
              size="extra-small"
              variant="info"
              onClick={onStoreButtonClick(domain)}
            >
              {name}
            </Button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="relative w-full h-[200px]">
          <Image fill sizes="100%" src={thumbnailImageAdditional || thumbnailImage} alt="" className="object-cover" />
        </div>
        <div className="w-24 h-24 absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[40%]">
          <Image fill sizes="100%" src={thumbnailImage} alt="" className="mask mask-circle absolute object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center pt-12">
        <p className="text-xl font-bold text-center">{name}</p>
        <PlatformLogos data={parentPlatforms} className="mt-2" />
        {renderStores()}
        <div className="grid grid-cols-4 mt-2 divide-x divide-base-100 w-full">
          <div className="flex flex-col items-center">
            <p className="text-sm">ESRB</p>
            <p className="w-full mt-1 text-center text-xs text-base-content-secondary truncate px-2">
              {esrbRating?.name || 'N/A'}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">Genres</p>
            <p className="w-full mt-1 text-center text-xs text-base-content-secondary truncate px-2">
              {getMultipleItemNames(genres, 1)}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">Publishers</p>
            <p className="w-full mt-1 text-center text-xs text-base-content-secondary truncate px-2">
              {getMultipleItemNames(publishers, 1)}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">Metacritics</p>
            <p className="w-full mt-1 text-center text-xs text-base-content-secondary truncate px-2">
              {metacritic || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;

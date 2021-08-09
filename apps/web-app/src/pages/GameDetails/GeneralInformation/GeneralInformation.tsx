import { Game } from '@game-store-monorepo/data-access';
import * as React from 'react';

type GeneralInformationProps = {
  data?: Game;
};

const GeneralInformation: React.FC<GeneralInformationProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const { thumbnailImage, backgroundImageAdditional, name, parentPlatforms, genres } = data;

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img src={backgroundImageAdditional} alt="" className="w-full bg-cover" />
        <img
          src={thumbnailImage}
          alt=""
          className="h-24 mask mask-circle absolute bottom-0 left-1/2 translate-x-[-45%] translate-y-[45%]"
        />
      </div>
    </div>
  );
};

export default GeneralInformation;

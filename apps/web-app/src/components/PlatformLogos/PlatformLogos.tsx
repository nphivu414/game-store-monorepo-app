import { Platform } from '@game-store-monorepo/data-access';
import * as React from 'react';

type PlatformLogosProps = {
  platforms: Platform[];
};

const PlatformLogos: React.FC<PlatformLogosProps> = () => {
  return (
    <div>
      <p>PlatformLogos</p>
    </div>
  );
};

export default PlatformLogos;

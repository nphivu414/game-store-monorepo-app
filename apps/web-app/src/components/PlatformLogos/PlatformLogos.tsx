import * as React from 'react';
import { Platform } from '@game-store-monorepo/data-access';
import { FaDesktop, FaGlobe } from 'react-icons/fa';
import { SiNintendoswitch, SiApple, SiAndroid, SiPlaystation, SiXbox, SiLinux, SiIos, SiAtari } from 'react-icons/si';
import cn from 'classnames';

type PlatformLogosProps = {
  data?: Platform[];
  amount?: number;
} & React.HTMLAttributes<HTMLDivElement>;

type LogoMap = {
  [key: number]: React.ReactElement;
};

const logoMap: LogoMap = {
  1: <FaDesktop className="text-primary" size={12} />,
  2: <SiPlaystation className="text-primary" size={12} />,
  3: <SiXbox className="text-primary" size={12} />,
  4: <SiIos className="text-primary" size={12} />,
  5: <SiApple className="text-primary" size={12} />,
  6: <SiLinux className="text-primary" size={12} />,
  7: <SiNintendoswitch className="text-primary" size={12} />,
  8: <SiAndroid className="text-primary" size={12} />,
  9: <SiAtari className="text-primary" size={12} />,
  14: <FaGlobe className="text-primary" size={12} />,
};

const PlatformLogos: React.FC<PlatformLogosProps> = ({ data, amount, className, ...rest }) => {
  if (!data) {
    return null;
  }

  const renderPlatFormLogos = (data: Platform[]) => {
    return data.map((platform, index) => {
      const platformId = platform.platform.id;
      return <div key={platformId}>{logoMap[platformId]}</div>;
    });
  };

  return (
    <div className={cn('grid grid-flow-col auto-cols-max gap-2 overflow-auto', className)} {...rest}>
      {amount ? renderPlatFormLogos(data.slice(0, amount)) : renderPlatFormLogos(data)}
    </div>
  );
};

export default PlatformLogos;

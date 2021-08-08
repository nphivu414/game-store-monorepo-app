import * as React from 'react';
import { Platform } from '@game-store-monorepo/data-access';
import { FaDesktop } from 'react-icons/fa';
import { SiNintendoswitch, SiApple, SiAndroid, SiPlaystation, SiXbox } from 'react-icons/si';
import cn from 'classnames';

type PlatformLogosProps = {
  data?: Platform[];
} & React.HTMLAttributes<HTMLDivElement>;

type LogoMap = {
  [key: number]: React.ReactElement;
};

const logoMap: LogoMap = {
  1: <FaDesktop className="text-primary" size={14} />,
  2: <SiPlaystation className="text-primary" size={14} />,
  3: <SiXbox className="text-primary" size={14} />,
  4: <SiApple className="text-primary" size={14} />,
  7: <SiNintendoswitch className="text-primary" size={14} />,
  8: <SiAndroid className="text-primary" size={14} />,
};

const PlatformLogos: React.FC<PlatformLogosProps> = ({ data, className, ...rest }) => {
  if (!data) {
    return null;
  }

  return (
    <div className={cn('grid grid-flow-col auto-cols-max gap-2', className)} {...rest}>
      {data.map((platform) => {
        return <div>{logoMap[platform.platform.id]}</div>;
      })}
    </div>
  );
};

export default PlatformLogos;

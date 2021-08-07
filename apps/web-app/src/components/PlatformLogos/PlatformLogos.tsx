import * as React from 'react';
import { Platform } from '@game-store-monorepo/data-access';
import { FaPlaystation, FaXbox, FaDesktop } from 'react-icons/fa';
import cn from 'classnames';

type PlatformLogosProps = {
  data?: Platform[];
} & React.HTMLAttributes<HTMLDivElement>;

const logoMap = {
  1: <FaDesktop className="text-primary" size={14} />,
  2: <FaPlaystation className="text-primary" size={14} />,
  3: <FaXbox className="text-primary" size={14} />,
};

const PlatformLogos: React.FC<PlatformLogosProps> = ({ data, className, ...rest }) => {
  if (!data) {
    return null;
  }

  return (
    <div className={cn('grid grid-flow-col auto-cols-max gap-3', className)} {...rest}>
      {data.map((platform) => {
        return <div>{logoMap[platform.platform.id]}</div>;
      })}
    </div>
  );
};

export default PlatformLogos;

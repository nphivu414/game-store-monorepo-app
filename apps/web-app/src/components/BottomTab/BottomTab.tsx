import * as React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiTwotoneAppstore, AiFillTags } from 'react-icons/ai';
import { ROUTES } from 'src/routes/routes';

const BottomTab: React.FC = () => {
  return (
    <div className="sticky bottom-0 overflow-hidden z-10">
      <ul className="menu compact justify-center flex-none w-full px-3 horizontal bg-base-100">
        <li>
          <Link to={ROUTES.ROOT} className="flex flex-col justify-center">
            <AiFillHome size={20} />
            <p className="text-2xs">Home</p>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.GENRES} className="flex flex-col justify-center">
            <AiTwotoneAppstore size={20} />
            <p className="text-2xs">Genres</p>
          </Link>
        </li>
        <li>
          <Link to={ROUTES.TAGS} className="flex flex-col justify-center">
            <AiFillTags size={20} />
            <p className="text-2xs">Tags</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomTab;

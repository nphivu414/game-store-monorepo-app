import * as React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';

const BottomTab: React.FC = () => {
  return (
    <div className="sticky bottom-0 overflow-hidden bottom-tab z-10">
      <ul className="menu compact justify-center flex-none w-full px-3 horizontal bg-base-100">
        <li>
          <Link to="/" className="flex flex-col justify-center">
            <AiFillHome size={20} />
            <p className="text-2xs">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex flex-col justify-center">
            <AiFillSetting size={20} />
            <p className="text-2xs">Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomTab;

import * as React from 'react';
import { BsViewList } from 'react-icons/bs';
import { FiGrid } from 'react-icons/fi';
import { ButtonGroup } from '../ButtonGroup';

type ViewDisplayOptionsProps = {
  viewType?: ViewType;
  onViewTypeChange?: (viewType: ViewType) => void;
};

type ViewType = 'Grid' | 'List';

export const ViewDisplayOptions: React.FC<ViewDisplayOptionsProps> = ({ viewType, onViewTypeChange }) => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center mb-5 overflow-y-hidden">
      <div>Display options:</div>
      <div>
        <ButtonGroup isFullWidth value={viewType} onChange={onViewTypeChange}>
          <ButtonGroup.Item value="Grid" className="w-1/2" size="small">
            <FiGrid size={16} />
          </ButtonGroup.Item>
          <ButtonGroup.Item value="List" className="w-1/2" size="small">
            <BsViewList size={16} />
          </ButtonGroup.Item>
        </ButtonGroup>
      </div>
    </div>
  );
};

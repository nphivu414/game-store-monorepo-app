import * as React from 'react';
import cn from 'classnames';

type ListProps = {
  data?: ListItem[];
  onItemClick?: (id: string) => void;
};

export type ListItem = {
  id: string;
  title: string;
  avatarUrl?: string;
  subTitle: string;
};

const List: React.FC<ListProps> = ({ data, onItemClick }) => {
  if (!data) {
    return null;
  }

  const handleOnItemClick = (id: string) => {
    return () => {
      onItemClick && onItemClick(id);
    };
  };

  return (
    <div>
      {data.map((item, index) => {
        const { id, title, subTitle, avatarUrl } = item;
        const isLastItem = index === data.length - 1;
        const itemClass = cn({
          'grid grid-cols-5 gap-2 rounded-lg cursor-pointer': true,
          'mb-1': !isLastItem,
          'p-2': true,
          'hover:bg-base-200 transition duration-300 ease-in-out': true,
        });
        return (
          <div key={id} className={itemClass} onClick={handleOnItemClick(id)}>
            <div className="flex justify-center items-center">
              <div className="avatar">
                <div className="rounded-full w-10 h-10">
                  <img src={avatarUrl} alt="" />
                </div>
              </div>
            </div>
            <div className="flex col-span-4 flex-col justify-center">
              {title && <p className="font-semibold mb-1">{title}</p>}
              {subTitle && <p className="text-xs text-base-content-secondary">{subTitle}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;

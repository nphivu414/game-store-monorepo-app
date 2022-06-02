import * as React from 'react';
import cn from 'classnames';
import { Skeleton } from '../Skeleton';

type ListProps = {
  data?: ListItem[];
  onItemClick?: (value: ListItem) => void;
  isLoading?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type ListItem = {
  id: string | number;
  title?: string;
  avatarUrl?: string;
  subTitle?: string;
  content?: React.ReactElement;
};

export const List: React.FC<ListProps> = ({ data, onItemClick, isLoading, ...rest }) => {
  const handleOnItemClick = (value: ListItem) => {
    return () => {
      onItemClick && onItemClick(value);
    };
  };

  if (isLoading) {
    return (
      <div className={cn('pt-4', rest.className)}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} theme="GAME_LIST_ITEM" />
          ))}
      </div>
    );
  }

  const renderListItems = () => {
    if (!data?.length) {
      return (
        <div {...rest}>
          <p className="text-center text-base-content-secondary">No data</p>
        </div>
      );
    }

    return data.map((item, index) => {
      const { id, title, subTitle, avatarUrl, content } = item;
      const itemClass = cn({
        'grid grid-cols-5 gap-2 rounded-lg cursor-pointer mb-1 p-2 last:mb-0': true,
        'hover:bg-base-200 transition duration-300 ease-in-out': true,
      });
      return (
        <div key={id} className={itemClass} onClick={handleOnItemClick(item)}>
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
            {content}
          </div>
        </div>
      );
    });
  };

  return <div {...rest}>{renderListItems()}</div>;
};

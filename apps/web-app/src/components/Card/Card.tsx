import * as React from 'react';
import cn from 'classnames';

type CardProps = {
  headerImageUrl?: string;
  title?: React.ReactElement | string;
  footer?: React.ReactElement;
  isBordered?: boolean;
  isCompact?: boolean;
  cardSideLayout?: boolean;
  glass?: boolean;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  isHeaderImageFull?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<CardProps> = ({
  headerImageUrl,
  title,
  footer,
  isBordered,
  cardSideLayout,
  glass,
  isCompact,
  isHeaderImageFull,
  className,
  titleClassName,
  bodyClassName,
  footerClassName,
  children,
  ...rest
}) => {
  const cardClass = cn({
    'card bg-base-100 transition-all duration-200 ': true,
    glass: glass,
    bordered: isBordered,
    compact: isCompact,
    'card-side': cardSideLayout,
    'image-full': isHeaderImageFull,
    'cursor-pointer hover:opacity-80': rest.onClick,
  });

  const renderCardTitle = () => {
    if (!title) {
      return null;
    }

    if (typeof title === 'string') {
      return <h2 className={cn('card-title truncate', titleClassName)}>{title}</h2>;
    }

    return <div className={className}>{title}</div>;
  };

  return (
    <div className={cn(cardClass, className)} {...rest}>
      {headerImageUrl && (
        <figure>
          <img className="h-[125px] object-cover" src={headerImageUrl} alt="" />
        </figure>
      )}
      <div className={cn('card-body', bodyClassName)}>
        {renderCardTitle()}
        {children}
        {footer && <div className={cn('justify-end card-actions', footerClassName)}>{footer}</div>}
      </div>
    </div>
  );
};

export default Card;

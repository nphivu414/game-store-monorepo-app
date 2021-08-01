import * as React from 'react';
import cn from 'classnames';

type SectionProps = {
  titleText?: string;
  titleClassName?: string;
  rightElement?: React.ReactElement;
  rightElementClassName?: string;
  leftElement?: React.ReactElement;
  leftElementClassName?: string;
  contentClassName?: string;
  className?: string;
  bordered?: boolean;
  hasPadding?: boolean;
};

const Section: React.FC<SectionProps> = ({
  titleText,
  titleClassName,
  rightElement,
  rightElementClassName,
  leftElement,
  leftElementClassName,
  contentClassName,
  className,
  bordered,
  hasPadding,
  children,
}) => {
  const sectionClass = cn({
    'border border-base-200 rounded-2xl': bordered,
    'p-4': hasPadding,
  });

  return (
    <div className={cn(sectionClass, className)}>
      <div className="flex">
        {leftElement && <div className={cn('mr-2', leftElementClassName)}>{leftElement}</div>}
        <div className="flex flex-1 justify-between items-center">
          {titleText && <p className={cn('text-xl font-bold', titleClassName)}>{titleText}</p>}
          {rightElement && <div className={rightElementClassName}>{rightElement}</div>}
        </div>
      </div>
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Section;

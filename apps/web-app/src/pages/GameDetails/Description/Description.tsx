import * as React from 'react';
import cn from 'classnames';
import Section from 'src/components/Section';
import Skeleton from 'src/components/Skeleton';

type DescriptionProps = {
  data?: string;
  isLoading?: boolean;
};

const Description: React.FC<DescriptionProps> = ({ data, isLoading }) => {
  const [enableLineClamp, setEnableLineClamp] = React.useState(true);

  const textClass = cn({
    'line-clamp-10': enableLineClamp,
  });

  const onDescriptionClick = () => {
    setEnableLineClamp(!enableLineClamp);
  };

  return (
    <Section titleText="Description" titleClassName="ml-4" className="mt-4">
      <div className="bg-base-100 p-4 cursor-pointer" onClick={onDescriptionClick}>
        {isLoading ? (
          <Skeleton theme="TEXT" />
        ) : data ? (
          <p className={cn('text-sm', textClass)} dangerouslySetInnerHTML={{ __html: data }} />
        ) : (
          <p className="text-base-content-secondary">N/A</p>
        )}
      </div>
    </Section>
  );
};

export default Description;

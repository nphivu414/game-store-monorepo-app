import { Tag } from '@root/data-access';
import { Badge, ROUTES, Section, Skeleton } from '@root/ui-web';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type TagsProps = {
  data?: Tag[];
  isLoading?: boolean;
};

const Tags: React.FC<TagsProps> = ({ data, isLoading }) => {
  const navigate = useNavigate();

  const onTagClick = (tag?: string) => {
    return () => {
      if (!tag) {
        return;
      }
      navigate(`${ROUTES.GAMES}/?tags=${tag}`);
    };
  };

  const renderTags = () => {
    if (!data?.length) {
      return <p className="text-base-content-secondary">N/A</p>;
    }

    return data.map((item) => {
      return (
        <Badge key={item.id} variant="info" className="mr-2 mb-2 cursor-pointer" onClick={onTagClick(item.slug)}>
          {item.slug}
        </Badge>
      );
    });
  };

  return (
    <Section titleText="Tags" titleClassName="ml-4" className="mt-4">
      <div className="bg-base-100 p-4">{isLoading ? <Skeleton theme="TEXT" /> : renderTags()}</div>
    </Section>
  );
};

export default Tags;

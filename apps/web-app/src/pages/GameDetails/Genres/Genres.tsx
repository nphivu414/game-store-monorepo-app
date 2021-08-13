import { Genre } from '@game-store-monorepo/data-access';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Badge from 'src/components/Badge';
import Section from 'src/components/Section';
import Skeleton from 'src/components/Skeleton';
import { ROUTES } from 'src/routes/routes';

type GenresProps = {
  data?: Genre[];
  isLoading?: boolean;
};

const Genres: React.FC<GenresProps> = ({ data, isLoading }) => {
  const { push } = useHistory();

  const onGenreClick = (genre?: string) => {
    return () => {
      if (!genre) {
        return;
      }
      push(`${ROUTES.GAMES}/?genres=${genre}`);
    };
  };

  const renderGenres = () => {
    if (!data) {
      return null;
    }

    return data.map((item) => {
      return (
        <Badge variant="info" className="mr-2 mb-2 cursor-pointer" onClick={onGenreClick(item.slug)}>
          {item.slug}
        </Badge>
      );
    });
  };

  return (
    <Section titleText="Genres" titleClassName="ml-4" className="mt-4">
      <div className="bg-base-100 p-4">
        {isLoading && <Skeleton theme="TEXT" />}
        {renderGenres()}
      </div>
    </Section>
  );
};

export default Genres;

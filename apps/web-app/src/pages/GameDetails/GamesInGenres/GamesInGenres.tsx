import React from 'react';
import { GamesQueryParams, Genre } from '@root/data-access';
import { useNavigate } from 'react-router-dom';
import { Button, ROUTES, Section } from '@root/ui-web';
import GameCarousel from '../../../components/GameCarousel/GameCarousel';

type GamesInGenresProps = {
  data?: Genre[];
};

const GamesInGenres: React.FC<GamesInGenresProps> = ({ data }) => {
  const navigate = useNavigate();

  const genreIds = React.useMemo(() => {
    return data?.map((genre) => genre.id).join(',');
  }, [data]);

  const queryParams: GamesQueryParams = React.useMemo(() => {
    return {
      variables: {
        pageSize: 6,
        genres: genreIds,
        ordering: '-metacritic',
      },
    };
  }, [genreIds]);

  const onSeeAllButtonClick = () => {
    const queryString = new URLSearchParams({
      genres: genreIds || '',
      ordering: '-metacritic',
    }).toString();
    navigate(`${ROUTES.GAMES}?${queryString}`);
  };

  if (!genreIds?.length) {
    return null;
  }

  return (
    <Section
      titleText="Other games in the same genre"
      titleClassName="ml-4"
      className="mt-4 mb-4"
      rightElement={
        <Button variant="primary" size="extra-small" isLink onClick={onSeeAllButtonClick}>
          See all
        </Button>
      }
    >
      <GameCarousel
        queryParams={queryParams}
        isCompact
        className="carousel-center"
        itemClassName="first:ml-4 last:mr-4"
        itemSize="small"
      />
    </Section>
  );
};

export default GamesInGenres;

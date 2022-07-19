import * as React from 'react';
import { GamesQueryParams, Genre } from '@game-store-monorepo/data-access';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/routes/routes';
import { Button, Section } from '@game-store-monorepo/ui-web';
import GameCarousel from 'src/components/GameCarousel/GameCarousel';

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
        itemClassName="w-2/5 first:ml-4 last:mr-4"
      />
    </Section>
  );
};

export default GamesInGenres;

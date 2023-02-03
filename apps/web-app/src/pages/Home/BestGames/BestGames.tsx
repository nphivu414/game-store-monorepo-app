import React from 'react';
import { GamesQueryParams } from '@root/data-access';
import { useNavigate } from 'react-router-dom';
import { Button, ROUTES, Section } from '@root/ui-web';
import GameCarousel from '../../../components/GameCarousel/GameCarousel';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 6,
    dates: '1990-01-01,2020-12-31',
    ordering: '-added',
  },
};

const BestGames: React.FC = () => {
  const navigate = useNavigate();
  const onSeeAllButtonClick = () => {
    const queryString = new URLSearchParams({
      dates: '1990-01-01,2020-12-31',
      ordering: '-added',
    }).toString();
    navigate(`${ROUTES.GAMES}?${queryString}`);
  };

  return (
    <Section
      titleText="Best Of All Time"
      className="mb-6"
      rightElement={
        <Button variant="primary" size="extra-small" isLink onClick={onSeeAllButtonClick}>
          See all
        </Button>
      }
    >
      <GameCarousel queryParams={queryParams} isCompact />
    </Section>
  );
};

export default BestGames;

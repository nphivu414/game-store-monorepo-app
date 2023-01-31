import * as React from 'react';
import { GamesQueryParams } from '@root/data-access';
import { Button, ROUTES, Section } from '@root/ui-web';
import GameCarousel from '../GameCarousel';
import { useRouter } from 'next/router';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 6,
    dates: '1990-01-01,2020-12-31',
    ordering: '-added',
  },
};

const BestGames: React.FC = () => {
  const { push } = useRouter();
  const onSeeAllButtonClick = () => {
    const queryString = new URLSearchParams({
      dates: '1990-01-01,2020-12-31',
      ordering: '-added',
    }).toString();
    push(`${ROUTES.GAMES}?${queryString}`);
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

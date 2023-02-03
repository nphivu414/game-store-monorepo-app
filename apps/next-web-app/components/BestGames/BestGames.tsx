import React from 'react';
import { RawgGameResponse } from '@root/data-access';
import { Button, ROUTES, Section } from '@root/ui-web';
import PureGameCarousel from '../PureGameCarousel';
import { useRouter } from 'next/navigation';

type BestGamesProps = {
  data?: RawgGameResponse;
};

const BestGames = ({ data }: BestGamesProps) => {
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
      <PureGameCarousel gameData={data} isCompact />
    </Section>
  );
};

export default BestGames;

import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GamesQueryParams, GamesQueryResponse } from '@game-store-monorepo/data-access';
import { getMultipleGenreNames } from '@game-store-monorepo/util';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/Button';
import Carousel, { CarouselItem } from 'src/components/Carousel';
import PlatformLogos from 'src/components/PlatformLogos';
import Section from 'src/components/Section';
import { GET_GAMES } from 'src/graphql/queries';
import { ROUTES } from 'src/routes/routes';

const queryParams: GamesQueryParams = {
  variables: {
    pageSize: 6,
    dates: '1990-01-01,2020-12-31',
    ordering: '-added',
  },
};

const BestGames: React.FC = () => {
  const { push } = useHistory();
  const { data, loading } = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);
  const pageSize = queryParams.variables.pageSize;

  const carouselData: CarouselItem[] = React.useMemo(() => {
    if (!data) {
      return [];
    }

    return data.allGames.results.slice(0, pageSize).map((item): CarouselItem => {
      return {
        id: item.id,
        headerImageUrl: item.thumbnailImage,
        title: item.name,
        content: (
          <div>
            <PlatformLogos data={item.parentPlatforms} className="mt-1" />
            <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleGenreNames(
              item.genres,
              2,
            )}`}</p>
          </div>
        ),
      };
    });
  }, [data, pageSize]);

  const onItemClick = (value: CarouselItem) => {
    push(`${ROUTES.GAMES}/${value.id}`);
  };

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
      <Carousel isCompact isLoading={loading} data={carouselData} itemClassName="w-2/3" onItemClick={onItemClick} />
    </Section>
  );
};

export default BestGames;

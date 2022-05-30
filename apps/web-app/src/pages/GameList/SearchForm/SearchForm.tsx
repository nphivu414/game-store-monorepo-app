import { useLazyQuery } from '@apollo/client';
import cn from 'classnames';
import { GamesQueryParams, SearchGamesQueryResponse } from '@game-store-monorepo/data-access';
import * as React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';
import FormInput from 'src/components/FormInput';
import List, { ListItem } from 'src/components/List';
import PlatformLogos from 'src/components/PlatformLogos';
import { SEARCH_GAMES } from '@game-store-monorepo/graphql-client';
import { useDebounce } from 'src/hooks';
import { ROUTES } from 'src/routes/routes';
import { getMultipleItemNames } from '@game-store-monorepo/util';

type SearchFormProps = React.HTMLAttributes<HTMLDivElement>;

const SearchForm: React.FC<SearchFormProps> = ({ className, ...rest }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchVisible, setSearchVisible] = React.useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const [searchGames, { data, loading }] = useLazyQuery<SearchGamesQueryResponse>(SEARCH_GAMES);

  const listClassName = cn({
    hidden: !searchVisible,
  });

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  }, [debouncedSearchTerm]);

  React.useEffect(() => {
    if (!debouncedSearchTerm) {
      return;
    }

    const queryParams: GamesQueryParams = {
      variables: {
        page: 1,
        pageSize: 10,
        search: debouncedSearchTerm,
      },
    };
    searchGames(queryParams);
  }, [debouncedSearchTerm, searchGames, searchVisible]);

  const gameResults = data?.searchGames?.results;

  const listData: ListItem[] = React.useMemo(() => {
    if (!gameResults) {
      return [];
    }
    return gameResults.map((item): ListItem => {
      return {
        id: item.id,
        avatarUrl: item.thumbnailImage,
        title: item.name,
        content: (
          <div>
            <PlatformLogos data={item.parentPlatforms} className="mt-1" />
            <p className="mt-2 text-sm text-base-content-secondary truncate">{`${getMultipleItemNames(
              item.genres,
              3,
            )}`}</p>
          </div>
        ),
      };
    });
  }, [gameResults]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchVisible(false);
    }, 200);
  };

  const handleFocus = () => {
    if (!gameResults?.length) {
      return;
    }
    setSearchVisible(true);
  };

  const onItemClick = (value: ListItem) => {
    navigate(`${ROUTES.GAMES}/${value.id}`);
  };

  const onSearchButtonClick = () => {
    navigate(`${ROUTES.GAMES}?search=${searchTerm}`);
  };

  return (
    <div className={cn(className)} {...rest}>
      <FormInput
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search games..."
        addonElement={
          <Button variant="primary" className="font-bold btn-addon-right" onClick={onSearchButtonClick}>
            <AiOutlineSearch size={16} />
          </Button>
        }
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <List
        data={listData}
        onItemClick={onItemClick}
        isLoading={loading}
        className={cn(
          'absolute w-full max-h-96 min-h-12 top-[55px] bg-base-100 overflow-y-auto rounded-xl shadow-2xl',
          listClassName,
        )}
      />
    </div>
  );
};

export default SearchForm;

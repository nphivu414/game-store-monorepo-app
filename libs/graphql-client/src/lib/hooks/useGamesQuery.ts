import { NetworkStatus, OperationVariables, QueryResult, useLazyQuery, useQuery } from '@apollo/client';
import { Game, GamesQueryParams, GamesQueryResponse } from '@root/data-access';
import { GET_GAMES } from '../queries';

type UseGamesQueryResponse = {
  results?: Game[];
  nextPage?: number;
  hasMore: boolean;
  refetching: boolean;
} & QueryResult<GamesQueryResponse, OperationVariables>;

export const useGamesQuery = (queryParams: GamesQueryParams): UseGamesQueryResponse => {
  const queryResponse = useQuery<GamesQueryResponse>(GET_GAMES, queryParams);
  const { data, networkStatus } = queryResponse;
  const results = data?.allGames.results;
  const nextPage = data?.allGames.nextPage;
  const hasMore = nextPage ? true : false;
  const refetching = networkStatus === NetworkStatus.refetch;

  return {
    hasMore,
    nextPage,
    refetching,
    results,
    ...queryResponse,
  };
};

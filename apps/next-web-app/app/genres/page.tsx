import { GenresQueryResponse } from '@root/data-access';
import { GET_GENRES, graphqlRequestClient } from '@root/graphql-client';
import GenrePage from './GenrePage';

/**
 * A workaround to get the data from the server side using graphql-request
 * since the Apollo client is not working well with NextJS 13's server components.
 * Github issue: https://github.com/apollographql/apollo-client/issues/10344
 */
async function getAllGenres() {
  const { allGenres } = await graphqlRequestClient.request<GenresQueryResponse>(GET_GENRES);
  return {
    results: allGenres.results,
    nextPage: allGenres.nextPage,
    hasMore: allGenres.nextPage ? true : false,
  };
}
const Page = async () => {
  const { results, hasMore, nextPage } = await getAllGenres();
  return <GenrePage initialData={results} initialHasMore={hasMore} initialNextPage={nextPage} />;
};

export default Page;

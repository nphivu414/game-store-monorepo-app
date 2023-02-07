import { PublishersQueryResponse } from '@root/data-access';
import { GET_PUBLISHERS, graphqlRequestClient } from '@root/graphql-client';
import PublisherPage from './PublisherPage';

/**
 * A workaround to get the data from the server side using graphql-request
 * since the Apollo client is not working well with NextJS 13's server components.
 * Github issue: https://github.com/apollographql/apollo-client/issues/10344
 */
async function getAllPublishers() {
  const { allPublishers } = await graphqlRequestClient.request<PublishersQueryResponse>(GET_PUBLISHERS);
  return {
    results: allPublishers.results,
    nextPage: allPublishers.nextPage,
    hasMore: allPublishers.nextPage ? true : false,
  };
}
const Page = async () => {
  const { results, hasMore, nextPage } = await getAllPublishers();
  return <PublisherPage initialData={results} initialHasMore={hasMore} initialNextPage={nextPage} />;
};

export default Page;

import { TagsQueryResponse } from '@root/data-access';
import { GET_TAGS, graphqlRequestClient } from '@root/graphql-client';
import TagPage from './TagPage';

/**
 * A workaround to get the data from the server side using graphql-request
 * since the Apollo client is not working well with NextJS 13's server components.
 * Github issue: https://github.com/apollographql/apollo-client/issues/10344
 */
async function getAllPublishers() {
  const { allTags } = await graphqlRequestClient.request<TagsQueryResponse>(GET_TAGS);
  return {
    results: allTags.results,
    nextPage: allTags.nextPage,
    hasMore: allTags.nextPage ? true : false,
  };
}
const Page = async () => {
  const { results, hasMore, nextPage } = await getAllPublishers();
  return <TagPage initialData={results} initialHasMore={hasMore} initialNextPage={nextPage} />;
};

export default Page;

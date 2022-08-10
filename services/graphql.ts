import { GraphQLClient } from "graphql-request";

export const cmsApi = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT as string
);

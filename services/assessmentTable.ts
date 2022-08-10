import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { cmsApi } from "./graphql";

export const getAssessmentTableQuery = gql`
    query MyQuery() {
        assessments {
            id
            table {
            raw
            }
        }
    }
`;

export const useAssessmentTable = () => {
  return useQuery(["assessment-table"], async () => {
    const { assessments } = await cmsApi.request(getAssessmentTableQuery);

    return assessments;
  });
};

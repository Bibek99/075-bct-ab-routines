import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { cmsApi } from "./graphql";

export const getRoutineQuery = gql`
  query MyQuery($routineDate: Date) {
    routine(stage: PUBLISHED, where: { routineDate: $routineDate }) {
      classRoutine {
        classType
        className
        time
        id
      }
      routineDate
    }
  }
`;

export const useRoutine = (date: any) => {
  return useQuery(["routine"], async () => {
    const { routine } = await cmsApi.request(getRoutineQuery, {
      routineDate: date,
    });

    return routine;
  });
};

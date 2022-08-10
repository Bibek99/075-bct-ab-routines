import React from "react";
import Loading from "./Loading";
import { RichText } from "@graphcms/rich-text-react-renderer";

interface IAssessmentTable {
  data: any;
  isLoading: boolean;
}

const AssessmentsTable: React.FC<IAssessmentTable> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="max-w-5xl margin-auto h-28 flex justify-center items-center">
        <Loading />
      </div>
    );
  } else {
    if (data) {
      return (
        <div className="max-w-5xl margin-auto">
          <div className="flex flex-col space-y-8">
            {data?.map((assessment: any) => (
              <RichText
                key={assessment.id}
                content={assessment.table.raw}
                renderers={{
                  table_header_cell: ({ children }) => (
                    <th className="py-4 px-2 text-left bg-slate-100">
                      {children}
                    </th>
                  ),
                  table_cell: ({ children }) => (
                    <td className="py-4 px-2">{children}</td>
                  ),
                }}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-w-5xl margin-auto">
          Oops, no published Data found. Contact CR.
        </div>
      );
    }
  }
};

export default AssessmentsTable;

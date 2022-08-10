import React from "react";
import Class from "./Class";
import Loading from "./Loading";

interface IRoutine {
  data: any;
  isLoading: boolean;
}

const Routine: React.FC<IRoutine> = ({ data, isLoading }) => {
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
            {data?.classRoutine?.map((classData: any) => (
              <Class key={classData.id} classData={classData} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-w-5xl margin-auto">
          No Routine published for the date
        </div>
      );
    }
  }
};

export default Routine;

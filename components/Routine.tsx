import Image from "next/image";
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
            {data?.classRoutine.length === 0 && (
              <div className="flex justify-center items-center flex-col space-y-6 text-slate-500">
                <Image
                  src={"/hurray.svg"}
                  width={200}
                  height={200}
                  alt="Holiday"
                />
                <p>It seems like there is holiday.</p>
              </div>
            )}
            {data?.classRoutine?.map((classData: any) => (
              <Class key={classData.id} classData={classData} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-w-5xl margin-auto">
          <div className="flex justify-center items-center flex-col space-y-6 text-slate-500">
            <Image src={"/nodata.svg"} width={200} height={200} alt="No Data" />
            <p>Oops, seems like your CR has not posted the routine yet.</p>
          </div>
        </div>
      );
    }
  }
};

export default Routine;

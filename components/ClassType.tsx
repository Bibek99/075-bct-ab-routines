import React from "react";
import classname from "classname";

interface IClassType {
  classType: "lecture" | "practical" | "assessment" | "quiz";
}

const classes = {
  lecture: "bg-blue-300 text-blue-600",
  practical: "bg-indigo-300 text-indigo-600",
  assessment: "bg-rose-300 text-rose-600",
  quiz: "bg-amber-200 text-amber-600",
};

const ClassType: React.FC<IClassType> = ({ classType }) => {
  return (
    <div
      className={classname(
        "w-12 h-12 flex justify-center items-center text-xl rounded-md",
        classes[classType]
      )}
    >
      {classType.slice(0, 1).toUpperCase()}
    </div>
  );
};

export default ClassType;

import moment from "moment";
import React from "react";
import ClassType from "./ClassType";

interface IClass {
  key: string;
  classData: {
    id: string;
    classType: "lecture" | "practical" | "assessment" | "quiz";
    className: string;
    time: string;
  };
}

type ClassType = {
  [key: string]: string;
};

const classNames: ClassType = {
  ini: "Internet & Intranet",
  is: "Information System",
  epp: "Engineering Professional Practice",
  snm: "Simulation & Modeling",
  project: "Major Project",
  e2: "Elective 2",
  e3: "Elective 3",
};

const classesType = {
  lecture: "Lecture Class",
  practical: "Practical Class",
  assessment: "Internal Assessment",
  quiz: "Quiz Exam",
};

const Class: React.FC<IClass> = ({
  key,
  classData: { className, classType, time },
}) => {
  return (
    <div
      key={key}
      className="flex items-center justify-between pb-6 border-b flex-wrap sm:flex-nowrap"
    >
      <div className="flex items-center space-x-4 md:space-x-10">
        <ClassType classType={classType} />
        <div className="flex flex-col space-y-1">
          <span className="md:text-xl font-medium">
            {classNames[className]}
          </span>
          <span className="text-sm text-slate-500">
            {classesType[classType]}
          </span>
        </div>
      </div>
      <div className="my-4 mx-auto sm:m-0">{time}</div>
    </div>
  );
};

export default Class;

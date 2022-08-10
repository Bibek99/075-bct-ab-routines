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

const classNames: any = {
  cn: "Computer Network",
  dsap: "Digital Signal Analysis and Processing",
  ees: "Energy, Environment and Society",
  onm: "Organization and Management",
  pm: "Project Management",
  ds: "Distributed Systems",
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
    <div key={key} className="flex items-center justify-between pb-6 border-b">
      <div className="flex items-center space-x-10">
        <ClassType classType={classType} />
        <div className="flex flex-col space-y-1">
          <span className="text-xl font-medium">{classNames[className]}</span>
          <span className="text-sm text-slate-500">
            {classesType[classType]}
          </span>
        </div>
      </div>
      <div className="text-slate-500">{time}</div>
    </div>
  );
};

export default Class;
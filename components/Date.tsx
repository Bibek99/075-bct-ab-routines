import React from "react";
import classname from "classname";
import moment from "moment";

interface IDate {
  day: string | number;
  type: "primary" | "secondary";
  label: "TODAY" | "TOMORROW";
  onClick: any;
}

const Date: React.FC<IDate> = ({ day, type, label, ...rest }) => {
  return (
    <div className="flex flex-col -space-x-2 cursor-pointer" {...rest}>
      <span
        className={classname(
          "text-9xl",
          type === "primary"
            ? "text-teal-500"
            : "text-slate-500 hover:text-slate-400"
        )}
      >
        {day}
      </span>
      <span
        style={{
          marginLeft: "8px",
        }}
        className={classname(
          type === "primary" ? "text-slate-50" : "text-slate-500"
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default Date;

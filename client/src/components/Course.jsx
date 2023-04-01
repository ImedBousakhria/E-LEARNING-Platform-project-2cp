import React from "react";

function Course({ groupe, description, time, module }) {
  return (
    <div className=" rounded-[10px] flex flex-col gap-1 bg-assignmentbg p-2 ">
      <div className="flex gap-[1ch]">
        <p>{module}</p>
        <p>{groupe}</p>
      </div>
      <p className="text-darkgray">{description}</p>
      <p className="text-blue ">{time}</p>
    </div>
  );
}

export default Course;

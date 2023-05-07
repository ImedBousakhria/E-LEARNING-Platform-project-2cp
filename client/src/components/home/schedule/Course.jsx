import React from "react";

function Course({ group, startTime, endTime }) {
  return (
    <div className=" flex flex-col gap-1 rounded-[10px] bg-assignmentbg p-2 ">
      <div className="flex gap-[1ch]">
        <p>{group}</p>
      </div>
      <p className="text-blue ">{startTime+" - "+endTime}</p>
    </div>
  );
}

export default Course;

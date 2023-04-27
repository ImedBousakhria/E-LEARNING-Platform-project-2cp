import React from "react";
import Editactivitieselement from "../reusable/Editactivitieselement";
import Deleteactivitieselemnt from "../reusable/Deleteactivitieselemnt";

const CaledarNotificationElement = ({ element }) => {
  console.log(element);
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-[1rem]  font-semibold ">session name</h2>
        <div className="flex gap-1">
          <Editactivitieselement type={"session"} text={"Edit"} />
          <Deleteactivitieselemnt text={"Delete"} />
        </div>
      </div>
      <div className="flex">
        <div className="basis-[50%] text-darkgray">
          <p>{element.groupe}</p>
          <p>{element.teacherName}</p>
          <div className="flex gap-1">
            <p>{element.time.start}</p>
            <span>-</span>
            <p>{element.time.end}</p>
          </div>
        </div>
        <div className="flex basis-[50%] items-center justify-center">
          <div
            className="h-[2rem] w-[2rem] rounded-sm"
            style={{ backgroundColor: element.color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CaledarNotificationElement;

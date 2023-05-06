import React, { useContext } from "react";
import Editactivitieselement from "../reusable/Editactivitieselement";
import Deleteactivitieselemnt from "../reusable/Deleteactivitieselemnt";
import { scheduleContext } from "../../content page/Schedule/Schedule";

const CaledarNotificationElement = ({ element }) => {
  console.log(element);
  const {editMode} = useContext(scheduleContext)

  function handleClick() {
    editMode[1](true);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-[1rem]  font-semibold ">session name</h2>
        <div className="flex gap-1">
          <Editactivitieselement handleClick={()=>handleClick()} text={"Edit"} />
          <Deleteactivitieselemnt text={"Delete"} />
        </div>
      </div>
      <div className="flex">
        <div className="basis-[50%] text-darkgray">
          <p>{element.group}</p>
          <div className="flex gap-1">
            <p>{element.startTime}</p>
            <span>-</span>
            <p>{element.endTime}</p>
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

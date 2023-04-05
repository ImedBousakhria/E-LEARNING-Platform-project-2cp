import React from "react";
import Deleteassignment from "./Deleteassignment";
import Editassignment from "./Editassignment";

const Assignmentnotificationelement = ({ element }) => {
  console.log(element);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-[1rem]  font-semibold ">{element.name}</h2>
        <div className="flex gap-1">
          <Editassignment text={"Edit"} />
          <Deleteassignment text={"Delete"} />
        </div>
      </div>
      <div>
        <p className="text-[13px] font-light text-darkgray">
          {element.description}
        </p>
      </div>
      <div>
        <div className="flex justify-between gap-[2%]">
          <div className="max-w-[28%] text-darkgray">
            <p className="text-[1rem]">Deadline: </p>
            <p className="font-light break-all text-[1rem]  ">{element.deadline}</p>
          </div>
          <div className="flex basis-[70%] gap-[2%]">
            {element.images.map((Element) => (
              <div className="basis-[49%]">
                <img className="w-full object-cover" src={Element} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignmentnotificationelement;

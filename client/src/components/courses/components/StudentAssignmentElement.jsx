import React from "react";
import assignmentfile from "../../../assets/icons/assignmentfile.svg";
import fileholder from "../../../assets/icons/fileholder.svg";
import Result from "../../reusable/Result";
import { element } from "prop-types";
import Deadline from "../../reusable/Deadline";

const StudentAssignmentElement = ({
  assignmentName,
  deadline,
  missed,
  mark,
}) => {
  return (
    <div className="flex w-[49%] flex-col gap-2 rounded-[10px] bg-primary p-2 ">
      <div className="flex gap-1 font-semibold">
        <img src={assignmentfile} />
        <span className="text-[0.875rem]">{assignmentName}</span>
      </div>
      <div className="flex gap-2">
        {mark ? (
          <div className="w-[5.25rem] rounded-[5px] bg-accent py-2 px-4 text-center text-[0.875rem] font-semibold text-white ">
            Done
          </div>
        ) : (
          <button
            className={`rounded-[5px] bg-${
              missed ? "redone" : "accent"
            } w-[5.25rem] py-2 px-4 text-center font-semibold text-[0.875rem] text-white`}
          >
            {missed ? "Missed" : "Submit"}
          </button>
        )}
        {mark ? (
          <Result mark={mark} />
        ) : (
          <Deadline missed={missed} deadline={deadline} />
        )}
      </div>
    </div>
  );
};

export default StudentAssignmentElement;

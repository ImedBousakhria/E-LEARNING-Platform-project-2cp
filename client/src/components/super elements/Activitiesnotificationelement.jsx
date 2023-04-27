import React from "react";
import Deleteactivitieselemnt from "../reusable/Deleteactivitieselemnt";
import Editactivitieselement from "../reusable/Editactivitieselement";
import Submissionelement from "./Submissionelement";
import profileholder from "../../assets/profile/profileholder.png";
import Filesdisplays from "../reusable/Filesdisplays";

const Activitiesnotificationelement = ({ element }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[1rem]  font-semibold ">{element.name}</h2>
          <div className="flex gap-1">
            <Editactivitieselement type={"assignment"} text={"Edit"} />
            <Deleteactivitieselemnt text={"Delete"} />
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
              <p className="break-all text-[1rem] font-light  ">
                {element.deadline}
              </p>
            </div>
            <div className="flex basis-[70%] gap-[2%]">
              <Filesdisplays files={element.files} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-[1rem]  font-semibold ">Submissions</h2>
        </div>
        <div className="flex flex-col gap-3">
          {element.submissions.map((Element) => {
            return (
              <Submissionelement
                profilepicture={profileholder}
                person={Element.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activitiesnotificationelement;

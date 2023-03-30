import React from "react";
import Seemore from "./Seemore";
import { assignment } from "../teacher/content/main";
import Assignment from "./Assignment";
import Mark from "./Mark";
import View from "./View";

const Lastsubmisstions = () => {
  return (
    <div className="rounded-[10px] bg-white p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-[1.25rem]">Last submissions</h2>
        <Seemore />
      </div>
      <div className="flex flex-col gap-2">
        {assignment.map((Element) => {
          return (
            <div className="flex justify-between items-center p-2 rounded-[10px] bg-assignmentbg ">
              <Assignment
                profilepicture={Element.profilepicture}
                person={Element.person}
                groupe={Element.groupe}
                date={Element.date}
                assignmentname={Element.assignmentname}
              />
              <div className="flex gap-2">
                <Mark />
                <View />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lastsubmisstions;

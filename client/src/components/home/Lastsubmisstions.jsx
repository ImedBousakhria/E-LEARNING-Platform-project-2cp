import React, { useContext } from "react";
import Seemore from "../reusable/Seemore";
import { assignment } from "../../content page/Home/content/main";
import Lastsubmisstionselement from "./homeelements/Lastsubmisstionselement";
import Mark from "../reusable/Mark";
import View from "../reusable/View";

const Lastsubmisstions = () => {


  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div className="flex justify-between">
        <h2 className="text-[1.25rem]">Last submissions</h2>
        <Seemore index={3} />
      </div>
      <div className="flex flex-col gap-2">
        {assignment.map((Element) => {
          return (
            <div className="flex items-center justify-between rounded-[10px] bg-assignmentbg p-2 ">
              <Lastsubmisstionselement
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

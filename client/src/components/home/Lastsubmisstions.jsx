import React, { useContext } from "react";
import Seemore from "../reusable/Seemore";
import { assignment } from "../../content page/Home/content/main";
import Lastsubmisstionselement from "./homeelements/Lastsubmisstionselement";
import Mark from "../reusable/Mark";
import View from "../reusable/View";
import GiveMark from "../reusable/GiveMark";
import { homeContext } from "../../content page/Home/Home";

const Lastsubmisstions = () => {

  const {submissions} = useContext(homeContext) ; 


  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div className="flex justify-between">
        <h2 className="text-[1.25rem]">Last submissions</h2>
        <Seemore index={3} />
      </div>
      <div className="flex flex-col gap-2">
        {submissions.map((Element, index) => {
          if(index <=2) {
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
                <View />
              </div>
            </div>
          );
          }else {
            return null ; 
          }
        })}
      </div>
    </div>
  );
};

export default Lastsubmisstions;

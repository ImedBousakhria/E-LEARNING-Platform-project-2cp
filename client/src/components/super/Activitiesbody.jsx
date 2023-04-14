import React from "react";
import { assignmentteacher } from "../../content page/Assignment/content/main";
import { teacherQuizzes } from "../../content page/Quizzes/content/main";
import Activitiesbodyelement from "../super elements/Activitiesbodyelement";
import Teacherassignment from "./Activities";

const Activitiesbody = ({ checkall, setSelected, type }) => {
  let Elements = []
  if(type=="quiz") {
    Elements= teacherQuizzes ; 
  }else if(type=="assignment") {
    Elements = assignmentteacher ; 
  }
  return (
    <div className="flex flex-col gap-2">
      {Elements.map((Element, index) => {
        return (
          <Activitiesbodyelement
            type={type}
            index={index + 1}
            checkall={checkall}
            name={Element.name}
            groupe={Element.groupe}
            date={Element.date}
          />
        );
      })}
    </div>
  );
};

export default Activitiesbody;

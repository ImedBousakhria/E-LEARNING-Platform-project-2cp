import React, { useContext } from "react";
import Activitiesbodyelement from "../super elements/Activitiesbodyelement";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { homeContext } from "../../content page/Home/Home";

const Activitiesbody = ({ checkall, setSelected, type }) => {
  var activitiesContext ; 
  if(type=="quiz") {
    activitiesContext = IndexElementContextquiz ; 
  }else if(type=="assignment") {
    activitiesContext = IndexElementContext ; 
  }else if(type == "students") {
    activitiesContext = homeContext ; 
  }
  const {firstContent} = useContext(activitiesContext)  ; 
  return (
    <div className="flex flex-col gap-2">
      {firstContent[0].map((Element, index) => {
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

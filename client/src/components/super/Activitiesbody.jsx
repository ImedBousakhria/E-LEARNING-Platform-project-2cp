import React, { useContext } from "react";
import Activitiesbodyelement from "../super elements/Activitiesbodyelement";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { homeContext } from "../../content page/Home/Home";
import { CoursesContext } from "../../content page/Courses/Teachercourses";

const Activitiesbody = ({ checkall, setSelected, type }) => {
  var activitiesContext ; 
  if(type=="quiz") {
    activitiesContext = IndexElementContextquiz ; 
  }else if(type=="assignment") {
    activitiesContext = IndexElementContext ; 
  }else if(type == "students") {
    console.log("this is a student")
    activitiesContext = CoursesContext  ; 
  }else if(type =="studentshome") {
    activitiesContext = homeContext ; 
  } 
  const {dataElements} = useContext(activitiesContext)  ; 

  console.log(dataElements) ; 
  return (
    <div className="flex flex-col gap-2">
      {dataElements?.map((Element, index) => {
        return (
          <Activitiesbodyelement
            type={type}
            index={index + 1}
            checkall={checkall}
            title={Element.title}
            cours={Element.course}
            deadline={Element.deadline}
          />
        );
      })}
    </div>
  );
};

export default Activitiesbody;

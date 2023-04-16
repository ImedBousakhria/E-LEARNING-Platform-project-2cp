import React from "react";
import assignment from "../../../assets/icons/assignment.svg";
import quiz from "../../../assets/icons/quiz.svg";
import Quizzresult from "../../reusable/Quizzresult";
import Evalassignment from "../../reusable/Evalassignment";

const Recentsubelem = ({ type, date }) => {
  var icon, text;
  if (type == "assignment") {
    icon = assignment;
    text = "Assignment 04";
  } else if (type == "quiz") {
    icon = quiz;
    text = "Quizz 03";
  }

  return type !== "lesson" ? (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div>
          <img src={icon} />
        </div>
        <div className="flex flex-col justify-evenly">
          <p className="text-[1rem] font-medium">{text}</p>
          <p className="text-[0.8125rem] text-darkgray">{date}</p>
        </div>
      </div>
      {type === "quiz" ? <Quizzresult /> : <Evalassignment />}
    </div>
  ) : null;
};

export default Recentsubelem;

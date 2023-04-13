import React from "react";
import assignment from "../../../assets/icons/assignment.svg";
import lesson from "../../../assets/icons/lesson.svg";
import quiz from "../../../assets/icons/quiz.svg";

const Recentelement = ({ type, date }) => {
  var icon, text;
  if (type == "assignment") {
    icon = assignment;
    text = "Assignment published";
  } else if (type == "lesson") {
    icon = lesson;
    text = "Lesson published";
  } else if (type == "quiz") {
    icon = quiz;
    text = "Quiz published";
  }
  return (
    <div className="flex gap-2">
      <div>
        <img src={icon} />
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-[1rem] font-medium">{text}</p>
        <p className="text-[0.8125rem] text-darkgray">{date}</p>
      </div>
    </div>
  );
};

export default Recentelement;

import React from "react";
import arrow from "../../assets/icons/annouarrow.svg";
import quizzes from "../../assets/icons/quizzes.svg";
import { studentQuizzes } from "../../content page/Courses/content/main";
import StudentQuizElement from "./components/StudentQuizElement";

const StudentQuizzes = () => {
  return (
    <div className="flex w-[49%] flex-col gap-4 rounded-[10px] bg-white p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={quizzes} />
          <h2 className="text-[1.25rem]">Quizzes</h2>
        </div>
        <div className="flex items-center gap-4">
          <button
            className={`${true ? "opacity-50" : ""} rotate-180 cursor-pointer`}
            alt=""
          >
            <img src={arrow} alt="" />
          </button>
          <button className={`${false ? "opacity-50" : ""} cursor-pointer`}>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-2">
        {studentQuizzes.map((element, index) => {
          return (
            <StudentQuizElement
              quizName={element.quizName}
              played={element.played}
              score={element.score}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentQuizzes;

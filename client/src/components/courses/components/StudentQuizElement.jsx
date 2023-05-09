import React, { useContext } from "react";
import quizzes from "../../../assets/icons/quizzes.svg";
import publish from "../../../assets/icons/publish.svg";
import Result from "../../reusable/Result";
import { CoursesContext } from "../../../content page/Courses/Teachercourses";

const StudentQuizElement = ({ quizName, played, score }) => {
  const { showQuizzContainer,
    setShowQuizzContainer, } = useContext(CoursesContext)
  return (
    <div className="flex w-[49%] flex-col gap-2 rounded-[10px] bg-primary p-2 ">
      <div className="flex gap-1 font-semibold w-4">
        <img src={quizzes} />
        <span className="min-w-max text-[0.875rem]">{quizName}</span>
      </div>
      <div className="flex justify-center gap-2">
        {/* {played ? (
          <div className="w-[5.25rem] rounded-[5px] bg-accent py-2 px-4 text-center text-[0.875rem] font-semibold text-white ">
            Done
          </div>
        ) : (
          <button
            className={`rounded-[5px] bg-${
              missed ? "redone" : "accent"
            } w-[5.25rem] py-2 px-4 text-center text-[0.875rem] font-semibold text-white`}
          >
            {missed ? "Missed" : "Submit"}
          </button>
        )} */}
        {played ? (
          <div className=" w-full">
            <Result text={'Score:'} mark={score} />
          </div>
        ) : (
          <button
            className=" flex w-full min-w-max
             items-center justify-center gap-1.5 rounded-[5px] bg-accent p-2 text-center text-[0.875rem] font-semibold text-white"
          >
            <span className="flex-shrink-0" onClick={() => setShowQuizzContainer(true)}>Play quizz</span>{" "}
            <img src={publish} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentQuizElement;

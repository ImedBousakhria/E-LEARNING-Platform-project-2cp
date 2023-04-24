import React, { useState } from "react";
import Deleteactivitieselemnt from "../../reusable/Deleteactivitieselemnt";
import Editactivitieselement from "../../reusable/Editactivitieselement";
import Submissionelement from "../../super elements/Submissionelement";
import QuizDisplay from "./QuizDisplay";
import Question from "../../reusable/Question";

const QuizNotificationElement = ({ element }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[1rem]  font-semibold ">{element.name}</h2>
          <div className="flex gap-1">
            <Editactivitieselement type={"quiz"} text={"Edit"} />
            <Deleteactivitieselemnt text={"Delete"} />
          </div>
        </div>
        <div>
          <p className="text-[13px] font-light text-darkgray">
            {element.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap justify-between gap-[2%]">
            <QuizDisplay element={element.quiz} questionIndex={questionIndex} />
          </div>
          <div className="flex gap-2">
            {element.quiz.map((element, index) => {
              return (
                <Question
                  index={index}
                  handleClick={() => setQuestionIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-[1rem]  font-semibold ">Results</h2>
        </div>
        <div className="flex flex-col gap-3">
          {element.submissions.map((Element) => {
            return (
              <Submissionelement
                profilepicture={Element.profile}
                person={Element.name}
                score={Element.score}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizNotificationElement;

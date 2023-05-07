import React, { useContext } from "react";
import deletequetion from "../../assets/icons/deletequetion.svg";
import { handleQuesitons } from "./Addnewquiz";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";

const Questions = ({ questionIndex, setQuestionIndex }) => {
  const { editMode, dataElements, elementIndex } = useContext(
    IndexElementContextquiz
  );
  const { questions, setQuestions } = useContext(handleQuesitons);
  if(editMode[0]) {
    setQuestions(dataElements[elementIndex[0]-1].content) ; 
  }
  console.log(questions);
  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((Element, index) => {
        return (
          <div
            onClick={() => {
              setQuestionIndex(index);
              console.log(questionIndex);
            }}
            className="flex w-fit gap-1 rounded-[17px] bg-lightgray p-1 font-thin text-black"
          >
            <span>Question{index + 1}</span>
            <div
              onClick={(e) => {
                e.preventDefault();
                console.log(index);
                setQuestions(
                  questions.filter((Element, i) => {
                    return index != i;
                  })
                  );
                  console.log(questions)
              }}
            >
              <img src={deletequetion} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;

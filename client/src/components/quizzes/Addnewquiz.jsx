import React, { createContext, useContext, useState } from "react";
import add from "../../assets/icons/add.svg";
import Answerstate from "./components/Answerstate";
import Questions from "./Questions";
import Publish from "../reusable/Publish";
import { teacherQuizzes } from "../../content page/Quizzes/content/main";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import Save from "../reusable/Save";
import Cancel from "../reusable/Cancel";
import { handleSubmit } from "./functions/HandleSubmit";

export const handleQuesitons = createContext();

const Addnewquiz = () => {
  const { elementIndex, editMode, firstContent } = useContext(
    IndexElementContextquiz
  );
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState(false);
  const [groupe, setGroupe] = useState(false);
  const [description, setDescripiton] = useState(false);
  const [deadline, setDeadline] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [questionIndex,setQuestionIndex] = useState(0) ; 
  function clearInputs() {
    document.getElementById("question").value = "";
    document.getElementById("choiceone").value = "";
    document.getElementById("choicetwo").value = "";
    document.getElementById("choicethree").value = "";
    document.getElementById("choicefour").value = "";
  }

  return (
    <handleQuesitons.Provider value={{ questions, setQuestions }}>
      <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
        <div>
          <h2 className="text-[1.25rem]">Add new quiz</h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!cancel) {
              handleSubmit(firstContent, questions);
            }
            setCancel(false);
            if(editMode[0] ){
              editMode[1](false) ; 
            }
            setTitle(null);
            setGroupe(null);
            setDescripiton(null);
            setDeadline(null);
            setQuestions([]);
          }}
          className="flex gap-[2%]"
        >
          <div className="flex basis-[49%] flex-col gap-4">
            <label htmlFor="title">
              <input
                value={
                  elementIndex[0] != null && editMode[0]
                    ? title || firstContent[0][elementIndex[0] - 1].name
                    : title || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (firstContent[0][elementIndex[0] - 1].name = "")
                    : null;
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="Title"
                id="title"
              />
            </label>
            <label htmlFor="groupe">
              <input
                value={
                  elementIndex[0] != null && editMode[0]
                    ? groupe || firstContent[0][elementIndex[0] - 1].name
                    : groupe || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (firstContent[0][elementIndex[0] - 1].name = "")
                    : null;
                  setGroupe(e.target.value);
                }}
                type="text"
                placeholder="groupe"
                id="groupe"
              />
            </label>
            <label htmlFor="description">
              <textarea
                value={
                  elementIndex[0] != null && editMode[0]
                    ? description ||
                      firstContent[0][elementIndex[0] - 1].description
                    : description || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (firstContent[0][elementIndex[0] - 1].description = "")
                    : null;
                  setDescripiton(e.target.value);
                }}
                placeholder="Description"
                id="description"
              />
            </label>
            <label htmlFor="Deadline(Date and time input)">
              <input
                value={
                  elementIndex[0] != null && editMode[0]
                    ? deadline || firstContent[0][elementIndex[0] - 1].deadline
                    : deadline || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (firstContent[0][elementIndex[0] - 1].deadline = "")
                    : null;
                  setDeadline(e.target.value);
                }}
                type="text"
                placeholder="Deadline(Date and time input)"
                id="deadline"
              />
            </label>
          </div>
          <div className="flex basis-[49%] flex-col gap-4">
            <div>
              <div className=" grid grid-cols-2 grid-rows-3 rounded-[10px]  pt-2 outline outline-1 outline-gray">
                <div className=" col-start-1  col-end-3 row-start-1 row-end-2">
                  <label htmlFor="question">
                    <input
                      className=" rounded-[0] border-x-[0] border-t-0 "
                      type="text"
                      id="question"
                      name="question"
                      placeholder="Question"
                    />
                  </label>
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex justify-between border border-l-0 border-t-0 border-gray px-1">
                  <label htmlFor="choiceone">
                    <input
                      type="text"
                      className="border-none"
                      name="choiceone"
                      id="choiceone"
                      placeholder="choice1"
                    />
                  </label>
                  <Answerstate />
                </div>
                <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex justify-between border border-x-0 border-t-0 border-gray px-1">
                  <label htmlFor="choicetwo">
                    <input
                      className="border-none"
                      type="text"
                      name="choicetwo"
                      id="choicetwo"
                      placeholder="choice2"
                    />
                  </label>
                  <Answerstate />
                </div>
                <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex justify-between border border-y-0 border-l-0 border-gray px-1">
                  <label htmlFor="choicethree">
                    <input
                      className="border-none"
                      type="text"
                      name="choicethree"
                      id="choicethree"
                      placeholder="choice3"
                    />
                  </label>
                  <Answerstate />
                </div>
                <div className="col-start-2 col-end-3 row-start-3 row-end-4 flex justify-between px-1">
                  <label htmlFor="choicefour">
                    <input
                      type="text"
                      className="border-none"
                      name="choicefour"
                      id="choicefour"
                      placeholder="choice4"
                    />
                  </label>
                  <Answerstate />
                </div>
              </div>
            </div>
            <Questions questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}  />
            <div className="flex justify-end gap-2 text-white">
              {editMode[0] ? (
                <div onClick={() => setCancel(true)}>
                  <Cancel />
                </div>
              ) : null}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let obj = new Object();
                  obj = {
                    question: document.getElementById("question").value,
                    answaer1: [
                      document.getElementById("choiceone").value,
                      document.querySelectorAll(".questionState")[0].value,
                    ],
                    answaer2: [
                      document.getElementById("choicetwo").value,
                      document.querySelectorAll(".questionState")[1].value,
                    ],
                    answaer3: [
                      document.getElementById("choicethree").value,
                      document.querySelectorAll(".questionState")[2].value,
                    ],
                    answaer4: [
                      document.getElementById("choicefour").value,
                      document.querySelectorAll(".questionState")[3].value,
                    ],
                  };
                  setQuestions([...questions, obj]);
                  clearInputs();
                }}
                className="flex items-center gap-2 rounded-[5px] bg-blue p-2"
              >
                Add <img src={add} />
              </button>
              {editMode[0] ? <Save /> : <Publish />}
            </div>
          </div>
        </form>
      </div>
    </handleQuesitons.Provider>
  );
};

export default Addnewquiz;

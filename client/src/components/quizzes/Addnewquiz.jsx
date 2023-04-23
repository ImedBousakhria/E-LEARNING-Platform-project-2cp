import React, { createContext, useContext, useState } from "react";
import add from "../../assets/icons/add.svg";
import Answerstate from "./components/Answerstate";
import Questions from "./Questions";
import Publish from "../reusable/Publish";
import { teacherQuizzes } from "../../content page/Quizzes/content/main";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import Save from "../reusable/Save";
import Cancel from "../reusable/Cancel";

export const handleQuesitons = createContext();

const Addnewquiz = () => {
  const { elementIndex, editMode } = useContext(IndexElementContextquiz);
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState(false);
  const [description,setDescripiton] = useState(false) ; 
  const [deadline,setDeadline] = useState(false) ; 
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
            e.preventDefault;
            alert("hello");
          }}
          className="flex gap-[2%]"
        >
          <div className="flex basis-[49%] flex-col gap-4">
            <label htmlFor="title">
              <input
                value={
                  elementIndex[0] != null && editMode[0]
                    ? title || teacherQuizzes[elementIndex[0] - 1].name
                    : ""
                }
                onChange={(e) => {
                  teacherQuizzes[elementIndex[0] - 1].name = "";
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="Title"
              />
            </label>
            <label htmlFor="description">
              <textarea
                value={
                  elementIndex[0] != null && editMode[0]
                    ? description ||
                      teacherQuizzes[elementIndex[0] - 1].description
                    : ""
                }
                onChange={(e) => {
                  teacherQuizzes[elementIndex[0] - 1].description = "";
                  setDescripiton(e.target.value);
                }}
                placeholder="Description"
              />
            </label>
            <label htmlFor="Deadline(Date and time input)">
              <input
                value={
                  elementIndex[0] != null && editMode[0]
                    ? deadline || teacherQuizzes[elementIndex[0] - 1].deadline
                    : ""
                }
                onChange={(e) => {
                  teacherQuizzes[elementIndex[0] - 1].deadline = "";
                  setDeadline(e.target.value);
                }}
                type="text"
                placeholder="Deadline(Date and time input)"
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
            <Questions />
            <div className="flex justify-end gap-2 text-white">
              {editMode[0] ? <Cancel setEditMode={editMode[1]} /> : null}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let obj = new Object();
                  obj = {
                    question: document.getElementById("question").value,
                    choiceone: [
                      document.getElementById("choiceone").value,
                      document.querySelectorAll(".questionState")[0].value,
                    ],
                    choictwo: [
                      document.getElementById("choicetwo").value,
                      document.querySelectorAll(".questionState")[1].value,
                    ],
                    choicethree: [
                      document.getElementById("choicethree").value,
                      document.querySelectorAll(".questionState")[2].value,
                    ],
                    choicefour: [
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
              {editMode[0] ? <Save setEditMode={editMode[1]} /> : <Publish />}
            </div>
          </div>
        </form>
      </div>
    </handleQuesitons.Provider>
  );
};

export default Addnewquiz;

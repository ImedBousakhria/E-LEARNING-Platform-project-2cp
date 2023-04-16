import React, { createContext, useState } from "react";
import add from "../../assets/icons/add.svg";
import publish from "../../assets/icons/publish.svg";
import Answerstate from "./components/Answerstate";
import Questions from "./Questions";

export const handleQuesitons = createContext() ;  

const Addnewquiz = () => { 
  const [questions, setQuestions] = useState([])
  function clearInputs() {
    document.getElementById("question").value = "";
    document.getElementById("choiceone").value = "";
    document.getElementById("choicetwo").value = "";
    document.getElementById("choicethree").value = "";
    document.getElementById("choicefour").value = ""; 
  }

  return (
    <handleQuesitons.Provider value={{questions,setQuestions}} >
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
            <input type="text" placeholder="Title" />
          </label>
          <label htmlFor="description">
            <textarea placeholder="Description" />
          </label>
          <label htmlFor="Deadline(Date and time input)">
            <input type="text" placeholder="Deadline(Date and time input)" />
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
                setQuestions([...questions,obj]) ; 
                clearInputs();
              }}
              className="flex items-center gap-2 rounded-[5px] bg-blue p-2"
            >
              Add <img src={add} />
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-[5px] bg-accent p-2"
            >
              Publish
              <img src={publish} />
            </button>
          </div>
        </div>
      </form>
    </div>
    </handleQuesitons.Provider>
    
  );
};

export default Addnewquiz;

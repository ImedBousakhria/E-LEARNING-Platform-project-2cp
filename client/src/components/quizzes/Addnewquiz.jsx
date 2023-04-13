import React from "react";
import add from "../../assets/icons/add.svg";
import publish from "../../assets/icons/publish.svg";
import Answerstate from "./components/Answerstate";

const Addnewquiz = () => {
  return (
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
              <div className="col-start-1 border border-l-0 border-gray border-t-0 px-1 col-end-2 row-start-2 row-end-3 flex justify-between">
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
              <div className="col-start-2 border-gray border border-x-0 border-t-0 px-1 col-end-3 row-start-2 row-end-3 flex justify-between">
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
              <div className="col-start-1 px-1 border border-y-0 border-gray border-l-0 col-end-2 row-start-3 row-end-4 flex justify-between">
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
              <div className="col-start-2 col-end-3 px-1 row-start-3 row-end-4 flex justify-between">
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
          <div className="flex justify-end gap-2 text-white">
            <button className="flex items-center gap-2 rounded-[5px] bg-blue p-2">
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
  );
};

export default Addnewquiz;

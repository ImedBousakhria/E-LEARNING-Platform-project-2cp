import React, { useState } from "react";
import wrong from "../../../assets/icons/wrong.svg";
import right from "../../../assets/icons/right.svg";

/* options
: 
Array(4)
0
: 
{text: 'slkdjf', state: false, _id: '64571fb5d1b96ff942c47475'}
1
: 
{text: 'sdf', state: true, _id: '64571fb5d1b96ff942c47476'}
2
: 
{text: 'df', state: false, _id: '64571fb5d1b96ff942c47477'}
3
: 
{text: 'dfs', state: false, _id: '64571fb5d1b96ff942c47478'} */

const QuizDisplay = ({ element,questionIndex }) => {
    return (
      <div className="grid w-full grid-cols-2 grid-rows-3 rounded-[10px] pt-2  text-darkgray outline outline-1 outline-gray">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 border border-x-0 border-t-0 border-gray px-2">
          <p>{element[questionIndex].question}</p>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3  flex justify-between border border-l-0 border-t-0 border-gray px-1">
          <p>{element[questionIndex].options[0].text}</p>
          <img
            className="w-fit"
            src={element[questionIndex].options[0].state ? right : wrong}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex justify-between border border-x-0 border-t-0 border-gray px-1">
          <p>{element[questionIndex].options[1].text}</p>
          <img
            className="w-fit"
            src={element[questionIndex].options[1].state ? right : wrong}
          />
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4  flex justify-between  border border-y-0 border-l-0 border-gray px-1">
          <p>{element[questionIndex].options[2].text}</p>
          <img
            className="w-fit"
            src={element[questionIndex].options[2].state ? right : wrong}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4  flex justify-between px-1">
          <p>{element[questionIndex].options[3].text}</p>
          <img
            className="w-fit"
            src={
              element[questionIndex].options[3].state ? right : wrong
            }
          />
        </div>
      </div>
    );
  } ; 

export default QuizDisplay;

import React, { useState } from "react";
import wrong from "../../../assets/icons/wrong.svg";
import right from "../../../assets/icons/right.svg";

const QuizDisplay = ({ element,questionIndex }) => {
    return (
      <div className="grid w-full grid-cols-2 grid-rows-3 rounded-[10px] pt-2  text-darkgray outline outline-1 outline-gray">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 border border-x-0 border-t-0 border-gray px-2">
          <p>{element[questionIndex].question}</p>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3  flex justify-between border border-l-0 border-t-0 border-gray px-1">
          <p>{element[questionIndex].answaer1[0]}</p>
          <img
            className="w-fit"
            src={element[questionIndex].answaer1[1] == "true" ? right : wrong}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex justify-between border border-x-0 border-t-0 border-gray px-1">
          <p>{element[questionIndex].answaer2[0]}</p>
          <img
            className="w-fit"
            src={element[questionIndex].answaer2[1] == "true" ? right : wrong}
          />
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4  flex justify-between  border border-y-0 border-l-0 border-gray px-1">
          <p>{element[questionIndex].answaer3[0]}</p>
          <img
            className="w-fit"
            src={element[questionIndex].answaer3[1] == "true" ? right : wrong}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4  flex justify-between px-1">
          <p>{element[questionIndex].answaer4[0]}</p>
          <img
            className="w-fit"
            src={element[questionIndex].answaer4[1] == "true" ? right : wrong}
          />
        </div>
      </div>
    );
  } ; 

export default QuizDisplay;

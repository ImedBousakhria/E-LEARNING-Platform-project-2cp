import React from "react";

const Option = ({ text, onClick, isChosen, timeUp, isCorrect }) => {
  return (
    <div
      className={` ${
        timeUp && isChosen
          ? isCorrect
            ? "bg-green text-white"
            : "bg-wrong text-white"
          : null
      }
      ${timeUp ? " pointer-events-none" : " "}
      ${isChosen ? "bg-darkgray text-white" : "bg-white hover:bg-gray"} 
      cursor-pointer rounded-md p-2 font-semibold `}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Option;

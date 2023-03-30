import React from "react";
import add from "../assets/icons/add.svg";

const Add = ({text, bg}) => {
  return (
    <button style={{backgroundColor:bg}} className="flex  items-center text-white rounded-[10px] gap-1 px-[12px] py-[15px]">
      <span>{text}</span>
      <img src={add} />
    </button>
  );
};

export default Add;

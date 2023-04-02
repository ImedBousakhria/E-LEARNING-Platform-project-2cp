import React from "react";

const Day = ({ date, text, handleclick, select }) => {


  return (
    <button
      onClick={handleclick}
      className="btndayclass hover:bg-accent hover:text-white  day min-w-[22%] rounded-[10px] border  border-darkgray px-1 py-3 text-center"
    >
      <p className="font-bold">{date}</p>
      <p className=" capitalize ">{text}</p>
    </button>
  );
};

export default Day;

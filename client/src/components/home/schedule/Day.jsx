import React from "react";

const Day = ({ date, text, handleclick, select, index }) => {


  return (
    <button
      onClick={handleclick}
      style={{
        backgroundColor: select === index ? "hsla(229, 100%, 66%, 1)" : "white",
        color: select === index ? "white" : "hsla(0, 0%, 72%, 1)",
        borderWidth:select === index ? "0" : "1px" , 
      }}
      className="btndayclass day w-[70%]  rounded-[10px] border border-darkgray px-1  py-3 text-center hover:bg-accent hover:text-white"
    >
      <p className="font-bold">{date}</p>
      <p className=" capitalize ">{text}</p>
    </button>
  );
};

export default Day;

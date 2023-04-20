import React from "react";
import attach from "../assets/icons/attach.svg";

const Attachfile = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-auto items-center gap-2 rounded-[10px] bg-blue px-4 py-2.5 font-semibold text-white"
    >
      <span className=" min-w-max">Attach file</span>
      <img src={attach} />
    </button>
  );
};

export default Attachfile;

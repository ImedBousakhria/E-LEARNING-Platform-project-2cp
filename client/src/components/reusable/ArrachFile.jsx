import React from "react";
import attach from "../../assets/icons/attach.svg";

const ArrachFile = ({ handleChange }) => {
  return (
    <label htmlFor="fileinput" className="flex  w-auto items-center gap-2 rounded-[10px] bg-blue px-4 py-2.5 font-semibold text-white">
      <input type="file" id="fileinput" onChange={handleChange} className=" hidden" />
      <span className=" min-w-max">Attach file</span>
      <img src={attach} />
    </label>
  );
};

export default ArrachFile;

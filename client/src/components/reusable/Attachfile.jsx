import React from "react";
import attach from "../../assets/icons/attach.svg";

const Attachfile = ({ onClick }) => {
  return (
    <label
      htmlFor="attach file"
      className="flex cursor-pointer gap-2 whitespace-nowrap rounded-[5px] bg-blue p-2"
    >
      Attach file
      <img src={attach} />
      <input type="file" id="attach file" className="hidden" />
    </label>
  );
};

export default Attachfile;

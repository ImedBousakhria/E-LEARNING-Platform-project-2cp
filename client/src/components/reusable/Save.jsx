import React from "react";
import save from "../../assets/icons/save.svg";

const Save = ({onClick}) => {
  return (
    <button
      type="submit"
      className="flex items-center gap-2 rounded-[5px] bg-accent p-2 text-white"
      onClick={onClick}
    >
      <span className=" min-w-max">Save</span>
      <img src={save} />
    </button>
  );
};
export default Save;

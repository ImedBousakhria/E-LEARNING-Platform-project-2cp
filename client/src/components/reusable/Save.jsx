import React from "react";
import save from "../../assets/icons/save.svg";

const Save = ({setEditMode}) => {
  return (
    <button
      onClick={() => setEditMode(false)}
      className="flex items-center gap-2 rounded-[5px] bg-accent p-2 text-white"
    >
      <span className=" min-w-max">Save</span>
      <img src={save} />
    </button>
  );
};
export default Save;

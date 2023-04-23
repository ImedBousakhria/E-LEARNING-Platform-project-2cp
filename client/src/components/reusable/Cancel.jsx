import React from "react";
import quit from "../../assets/icons/quit.svg";

const Cancel = ({ setEditMode, setContent }) => {
  return (
    <button
      onClick={() => {
        setEditMode(false);
        setContent((prevContent) => ({
          ...prevContent,
          description: "",
        }));
      }}
      className="flex w-auto items-center gap-2 rounded-[5px] border-[1.5px] border-darkgray p-2  text-darkgray"
    >
      <span className=" min-w-max">Cancel</span>
      <img className="w-5" src={quit} />
    </button>
  );
};
export default Cancel;

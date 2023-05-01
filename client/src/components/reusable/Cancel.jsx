import React from "react";
import quit from "../../assets/icons/quit.svg";

const Cancel = ({text ,onClick}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex items-center gap-2 rounded-[5px]  border border-darkgray p-2 text-darkgray"
    >
      {text ? <span>Cancel</span> : null}
      
      <img src={quit} />
    </button>
  );
};
export default Cancel;

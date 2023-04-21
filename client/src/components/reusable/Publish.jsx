import React from "react";
import publish from "../../assets/icons/publish.svg";

const Publish = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={(e)=>e.preventDefault()}
        className="flex items-center gap-2 rounded-[5px] bg-accent p-2"
      >
        <span>Publish</span>
        <img src={publish} />
      </button>
    </div>
  );
};

export default Publish;

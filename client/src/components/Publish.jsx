import React from "react";
import publish from "../assets/icons/publish.svg";

const Publish = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center gap-2 rounded-[10px] bg-accent px-4 py-2.5 font-semibold text-white"
      >
        <span>Publish</span>
        <img src={publish} />
      </button>
    </div>
  );
};

export default Publish;

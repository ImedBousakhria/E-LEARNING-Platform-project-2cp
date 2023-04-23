import React from "react";
import publish from "../../assets/icons/publish.svg";

const Publish = ({ onClick }) => {
  return (
    <div>
      <button
        type="submit"
        className="flex items-center text-white gap-2 rounded-[5px] bg-accent p-2"
      >
        <span>Publish</span>
        <img src={publish} />
      </button>
    </div>
  );
};

export default Publish;

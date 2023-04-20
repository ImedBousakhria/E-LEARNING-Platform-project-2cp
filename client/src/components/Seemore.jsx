import React from "react";
import rightarrowgray from "../assets/icons/rightarrowgray.svg";

const Seemore = () => {
  return (
    <a className="text-darkgray">
      <div className="flex gap-1">
        <span>See All</span>
        <img src={rightarrowgray} />
      </div>
    </a>
  );
};

export default Seemore;

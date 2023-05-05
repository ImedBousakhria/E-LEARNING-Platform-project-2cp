import React, { useState } from "react";
import GiveMark from "./GiveMark";

const Mark = () => {
  const [showGiveMark, setShowGiveMark] = useState("hidden");
  return (
    <div className="relative">
      <button
        onClick={() => {
          showGiveMark == "hidden"
            ? setShowGiveMark("block")
            : setShowGiveMark("hidden");
        }}
        className=" rounded-[5px] z-0 border border-accent bg-white p-[5px] text-accent"
      >
        Mark
      </button>
      <GiveMark showGiveMark={showGiveMark} />
    </div>
  );
};

export default Mark;

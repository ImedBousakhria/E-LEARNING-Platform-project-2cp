import React from "react";

const Quizzprogress = ({percentage}) => {
  return (
    <div className="bg-white relative h-2 w-full">
      <div
        className=" bg-accent absolute top-0 left-0 h-full rounded-lg"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default Quizzprogress;

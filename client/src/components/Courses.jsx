import React from "react";
import { programs } from "../landing page/content/programs";
import { useState } from "react";

const Courses = () => {
  const [activeProgIndex, setActiveProgIndex] = useState(0);

  return (
    <div className="grid min-w-max grid-flow-row grid-cols-4 gap-x-4 gap-y-2">
      {programs.map((element, index) => (
        <div
          onClick={() => setActiveProgIndex(index)}
          className={` ${
            activeProgIndex === index ? "bg-blue" : "bg-accent"
          } cursor-pointer rounded-lg px-2 py-3.5 text-center font-semibold text-white `}
        >
          {element.name}
        </div>
      ))}
    </div>
  );
};

export default Courses;

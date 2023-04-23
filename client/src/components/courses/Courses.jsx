import React, { useContext } from "react";
import { programs } from "../../landing page/content/pograms";
import { CoursesContext } from "../../content page/Courses/Teachercourses";

const Courses = () => {
  const {activeProgIndex , setActiveProgIndex} = useContext(CoursesContext)

  return (
    <div className="grid grid-flow-row grid-cols-4 grid-rows-2 gap-x-4 gap-y-2">
      {programs.map((element, index) => (
        <div
          onClick={() => setActiveProgIndex(index)}
          className={`${
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

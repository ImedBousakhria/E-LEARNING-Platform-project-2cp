import React, { useContext, useEffect, useState } from "react";
import { CoursesContext } from "../../content page/Courses/Teachercourses";
import axios from "axios";

const Courses = () => {
  const { activeProgIndex, setActiveProgIndex, courses, setCourses} = useContext(CoursesContext);
  
  // GET courses
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/course/getAll");
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCourses();    
  }, []);

  return (
    <div className="grid grid-flow-row grid-cols-4 grid-rows-2 gap-x-4 gap-y-2">
      {
      courses.map((element, index) => (
        <div
          onClick={() => setActiveProgIndex(index)}
          className={`${
            activeProgIndex === index ? "bg-blue" : "bg-accent"
          } cursor-pointer rounded-lg px-2 py-3.5 text-center font-semibold text-white `}
        >
          {element.title}
        </div>
      ))}
    </div>
  );
};

export default Courses;

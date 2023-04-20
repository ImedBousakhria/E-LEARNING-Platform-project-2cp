import React from "react";
import Search from "../../components/Search";
import { useContext } from "react";
import Allcourses from "../../components/Allcourses";
import Newlesson from "../../components/Newlesson";
import Courses from "../../components/Courses";
import { CoursesContext } from "../Teachercourses";

const Coursemain = () => {
  const { editMode } = useContext(CoursesContext);
  return (
    <div className="flex flex-shrink-0 basis-[60%] flex-col gap-6 bg-primary px-8 py-4">
      <div className="mb-8 flex justify-between">
        <h1 className="text-2xl font-bold text-nightblue">Courses</h1>
        <div
          className={` ${
            editMode ? " pointer-events-none blur-[2px] filter" : ""
          }`}
        >
          <Search />
        </div>
      </div>
      <Courses />
      <Newlesson />
      <Allcourses />
    </div>
  );
};

export default Coursemain;

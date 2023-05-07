import React from "react";
import Search from "../../../components/reusable/Search";
import { useContext } from "react";
import Allcourses from "../../../components/courses/Allcourses";
import Newlesson from "../../../components/courses/Newlesson";
import Courses from "../../../components/courses/Courses";
import { CoursesContext } from "../Teachercourses";
import StudentAssignment from "../../../components/courses/StudentAssignment";

import StudentQuizzes from "../../../components/courses/StudentQuizzes";
import { propsContext } from "../../Mainapp";

const Coursemain = ({ index }) => {
  const { editMode } = useContext(CoursesContext);
  const { userType } = useContext(propsContext);


  return (
    <div className="flex flex-shrink-0 basis-[60%] flex-col gap-6 bg-primary px-12 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-nightblue">Courses</h1>
        <div
          className={` ${
            editMode ? " pointer-events-none blur-[2px] filter" : ""
          }`}
        >
          <Search />
        </div>
      </div>

      {userType.isStudent ? null : (
        <>
          <Courses />
          <Newlesson />
          <Allcourses />
        </>
      )}

      {userType.isStudent ? (
        <div className=" flex flex-col gap-3">
          <div>
            <Allcourses admin={userType.isAdmin}/>
          </div>
          <div className="flex gap-[5%]">
            <StudentAssignment />
            <StudentQuizzes />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Coursemain;
